import z from "zod";

export const contactMessageSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be less than 50 characters")
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    email: z.email({error: "Please enter a valid email address"}),
    phone: z.string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be less than 15 digits")
        .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
    subject: z.string()
        .min(10, "Subject must be at least 10 characters")
        .max(100, "Subject  must be less than 100 character"),
    message: z.string()
        .min(20, "Message must be at least 20 character")
        .max(1000, "Message must be less than 1000 characters")
})

export type MessageFormData = z.infer<typeof contactMessageSchema>;



