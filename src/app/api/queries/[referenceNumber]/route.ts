import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Query from '@/models/Query';

// GET - Retrieve a specific query by reference number
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ referenceNumber: string }> }
) {
  try {
    // Connect to database
    await connectDB();

    const { referenceNumber } = await params;

    // Find query by reference number
    const query = await Query.findOne({ referenceNumber });

    if (!query) {
      return NextResponse.json(
        {
          success: false,
          message: 'Query not found',
        },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        data: query,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error fetching query:', error);

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

// PUT - Update a specific query by reference number
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ referenceNumber: string }> }
) {
  try {
    // Connect to database
    await connectDB();

    const { referenceNumber } = await params;
    const body = await request.json();

    // Find and update query
    const updatedQuery = await Query.findOneAndUpdate(
      { referenceNumber },
      {
        $set: {
          ...body,
          updatedAt: new Date(),
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedQuery) {
      return NextResponse.json(
        {
          success: false,
          message: 'Query not found',
        },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Query updated successfully',
        data: updatedQuery,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error updating query:', error);

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

// DELETE - Delete a specific query by reference number
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ referenceNumber: string }> }
) {
  try {
    // Connect to database
    await connectDB();

    const { referenceNumber } = await params;

    // Find and delete query
    const deletedQuery = await Query.findOneAndDelete({ referenceNumber });

    if (!deletedQuery) {
      return NextResponse.json(
        {
          success: false,
          message: 'Query not found',
        },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Query deleted successfully',
        data: { referenceNumber: deletedQuery.referenceNumber },
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error deleting query:', error);

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
