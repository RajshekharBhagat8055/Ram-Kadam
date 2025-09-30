"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { queryFormSchema, type QueryFormData } from "@/validators/query-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function QueryForm() {
  const form = useForm<QueryFormData>({
    resolver: zodResolver(queryFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      villageName: "",
      taluka: "",
      district: "",
      complaintDetails: "",
    },
  })

  const onSubmit = (data: QueryFormData) => {
    console.log("Form submitted:", data)
    // TODO: Implement actual form submission logic
    alert("Form submitted successfully! Check console for data.")
  }

  const onClear = () => {
    form.reset()
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6 bg-white mt-10 rounded-xl shadow-md">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Complaint Form</h1>
        <p className="text-muted-foreground">
          Please fill out the form below with your complaint details
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Address Field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your complete address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Village Name Field */}
            <FormField
              control={form.control}
              name="villageName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Village Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter village name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Taluka Field */}
            <FormField
              control={form.control}
              name="taluka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taluka *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter taluka" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* District Field */}
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter district" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Complaint Details Field */}
          <FormField
            control={form.control}
            name="complaintDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Complaint Details *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe your complaint in detail..."
                    className="min-h-32"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClear}
              className="min-w-24"
            >
              Clear
            </Button>
            <Button 
              type="submit" 
              className="min-w-24"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}