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
import { useTranslation } from "react-i18next"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"

export default function QueryForm() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const onSubmit = async (data: QueryFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('/api/queries', data);
      
      if (response.data.success) {
        toast.success(
          `${t('queryForm.submitSuccess')} ${response.data.data.referenceNumber}`,
          {
            duration: 5000,
            description: t('queryForm.submitSuccessDesc'),
          }
        );
        
        // Reset form after successful submission
        form.reset();
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      if (error.response?.data?.message) {
        toast.error(error.response.data.message, {
          duration: 5000,
        });
      } else {
        toast.error(t('queryForm.submitError'), {
          duration: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const onClear = () => {
    form.reset()
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6 bg-white mt-10 rounded-xl shadow-md">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">{t("queryForm.title")}</h1>
        <p className="text-muted-foreground">
          {t("queryForm.subtitle")}
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
                  <FormLabel>{t("queryForm.name")} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t("queryForm.namePlaceholder")} {...field} />
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
                  <FormLabel>{t("queryForm.phone")} *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder={t("queryForm.phonePlaceholder")} 
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
                <FormLabel>{t("queryForm.address")} *</FormLabel>
                <FormControl>
                  <Input placeholder={t("queryForm.addressPlaceholder")} {...field} />
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
                  <FormLabel>{t("queryForm.villageName")} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t("queryForm.villagePlaceholder")} {...field} />
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
                  <FormLabel>{t("queryForm.taluka")} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t("queryForm.talukaPlaceholder")} {...field} />
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
                  <FormLabel>{t("queryForm.district")} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t("queryForm.districtPlaceholder")} {...field} />
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
                <FormLabel>{t("queryForm.complaintDetails")} *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t("queryForm.complaintPlaceholder")}
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
              {t("queryForm.clear")}
            </Button>
            <Button 
              type="submit" 
              className="min-w-24"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("queryForm.submitting") : t("queryForm.submit")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}