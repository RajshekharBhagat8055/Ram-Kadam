import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Query from '@/models/Query';

// GET - Retrieve query statistics
export async function GET(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Get statistics by status
    const statusStats = await Query.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Get statistics by priority
    const priorityStats = await Query.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 }
        }
      }
    ]);

    // Get statistics by district
    const districtStats = await Query.aggregate([
      {
        $group: {
          _id: '$district',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]);

    // Get statistics by taluka
    const talukaStats = await Query.aggregate([
      {
        $group: {
          _id: '$taluka',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]);

    // Get monthly statistics for the current year
    const currentYear = new Date().getFullYear();
    const monthlyStats = await Query.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${currentYear}-01-01`),
            $lt: new Date(`${currentYear + 1}-01-01`)
          }
        }
      },
      {
        $group: {
          _id: {
            month: { $month: '$createdAt' },
            year: { $year: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.month': 1 }
      }
    ]);

    // Get total count
    const totalQueries = await Query.countDocuments();

    // Get recent queries count (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentQueries = await Query.countDocuments({
      createdAt: { $gte: thirtyDaysAgo }
    });

    // Get resolved queries count
    const resolvedQueries = await Query.countDocuments({
      status: 'resolved'
    });

    // Get average resolution time
    const avgResolutionTime = await Query.aggregate([
      {
        $match: {
          status: 'resolved',
          resolvedAt: { $exists: true }
        }
      },
      {
        $project: {
          resolutionTime: {
            $subtract: ['$resolvedAt', '$createdAt']
          }
        }
      },
      {
        $group: {
          _id: null,
          avgResolutionTime: { $avg: '$resolutionTime' }
        }
      }
    ]);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        data: {
          overview: {
            totalQueries,
            recentQueries,
            resolvedQueries,
            resolutionRate: totalQueries > 0 ? (resolvedQueries / totalQueries * 100).toFixed(2) : 0,
            avgResolutionTimeDays: avgResolutionTime.length > 0 
              ? Math.round(avgResolutionTime[0].avgResolutionTime / (1000 * 60 * 60 * 24))
              : 0
          },
          statusStats,
          priorityStats,
          districtStats,
          talukaStats,
          monthlyStats
        },
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error fetching query statistics:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
