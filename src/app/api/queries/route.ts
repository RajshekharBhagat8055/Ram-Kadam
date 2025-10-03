import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Query from '@/models/Query';
import { queryFormSchema } from '@/validators/query-form';

// POST - Create a new query
export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();

    // Validate the data using Zod schema
    const validatedData = queryFormSchema.parse(body);

    // Create new query document
    const newQuery = new Query({
      name: validatedData.name,
      phone: validatedData.phone,
      address: validatedData.address,
      villageName: validatedData.villageName,
      taluka: validatedData.taluka,
      district: validatedData.district,
      complaintDetails: validatedData.complaintDetails,
    });

    // Save to database
    const savedQuery = await newQuery.save();

    // Return success response with reference number
    return NextResponse.json(
      {
        success: true,
        message: 'Query submitted successfully',
        data: {
          referenceNumber: savedQuery.referenceNumber,
          id: savedQuery._id,
          status: savedQuery.status,
          createdAt: savedQuery.createdAt,
        },
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Error creating query:', error);

    // Handle validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle duplicate reference number error
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: 'Duplicate reference number. Please try again.',
        },
        { status: 409 }
      );
    }

    // Handle other errors
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

// GET - Retrieve queries (with optional filtering)
export async function GET(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const district = searchParams.get('district');
    const taluka = searchParams.get('taluka');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Build filter object
    const filter: any = {};
    if (status) filter.status = status;
    if (district) filter.district = district;
    if (taluka) filter.taluka = taluka;

    // Get queries with pagination
    const queries = await Query.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-__v'); // Exclude version field

    // Get total count for pagination
    const total = await Query.countDocuments(filter);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        data: {
          queries,
          pagination: {
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalQueries: total,
            hasNextPage: page < Math.ceil(total / limit),
            hasPrevPage: page > 1,
          },
        },
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error fetching queries:', error);

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
