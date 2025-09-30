import { z } from "zod"

export const queryFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  
  address: z
    .string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters"),
  
  villageName: z
    .string()
    .min(2, "Village name must be at least 2 characters")
    .max(50, "Village name must be less than 50 characters"),
  
  taluka: z
    .string()
    .min(2, "Taluka must be at least 2 characters")
    .max(50, "Taluka must be less than 50 characters"),
  
  district: z
    .string()
    .min(2, "District must be at least 2 characters")
    .max(50, "District must be less than 50 characters"),
  
  complaintDetails: z
    .string()
    .min(20, "Complaint details must be at least 20 characters")
    .max(1000, "Complaint details must be less than 1000 characters")
})

export type QueryFormData = z.infer<typeof queryFormSchema>
