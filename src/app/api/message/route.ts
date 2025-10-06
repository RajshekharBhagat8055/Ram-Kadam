import connectDB from "@/lib/mongodb";
import MessageModel from "@/models/Message.model";
import { contactMessageSchema } from "@/validators/contact-message.validator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const body = await req.json();
    const parsedData = contactMessageSchema.safeParse(body);
    if(!parsedData.success) {
        return NextResponse.json({
            success: false,
            message: "Invalid Message Input",
        },{status: 422})
    }
    try {
        await connectDB();
        const {name, email, phone, subject, message} = parsedData.data;
        const contactMessage =  new MessageModel({
            name,
            email,
            phone,
            subject,
            message,
        })   
        await contactMessage.save();
        return NextResponse.json(
            {
                success: true,
                message: "Message Sent Successfully",
            },
            {
                status: 200
            }
        )
    } catch (error: any) {
        console.error('Error Sending Message:', error);

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