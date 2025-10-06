import mongoose from "mongoose";

export interface IMessage extends Document{
    name: string,
    phone: string,
    email: string,
    subject: string,
    message: string,
}

const contactMessageSchema = new mongoose.Schema<IMessage>({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const MessageModel = mongoose.models.Message || mongoose.model<IMessage>('Message', contactMessageSchema);
export default MessageModel;
