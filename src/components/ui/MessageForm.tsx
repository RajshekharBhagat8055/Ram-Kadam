"use client"
import { contactMessageSchema, MessageFormData } from "@/validators/contact-message.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { t } from "i18next"
import { useForm } from "react-hook-form"
import { MdSend } from "react-icons/md"
import { toast } from "sonner"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Button } from "./button"
import { useState } from "react"
import axios from "axios"

const MessageForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const form = useForm<MessageFormData>({
        resolver: zodResolver(contactMessageSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        }
    })
    const onSubmit = async (data: MessageFormData) => {
        setIsLoading(true);
        try {
            const { data: response } = await axios.post('/api/message', data);
            if (response.success) {
                toast(response.message);
                setIsLoading(false);
            }
        } catch (error: any) {
            console.error('Form submission error:', error);

            if (error.response?.data?.message) {
                toast.error(error.response.data.message, {
                    duration: 5000,
                });
            } else {
                toast.error(error.message, {
                    duration: 5000,
                });
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="w-full h-fit flex flex-col p-4 gap-4 bg-white shadow-md shadow-black/10 rounded-xl">
            <div className="text-2xl font-semibold text-orange-500 flex items-center gap-6">
                <MdSend />
                {t('contact.sendUsMessage')}
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <FormDescription className="mb-6">
                        {t('contact.fillFormDesc')}
                    </FormDescription>
                    <div className="flex gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>{t('contact.name')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('contact.namePlaceholder')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>{t('contact.email')}</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder={t('contact.emailPlaceholder')} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-6">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>{t('contact.phone')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('contact.phonePlaceholder')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>{t('contact.subject')}</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder={t('contact.subjectPlaceholder')} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('contact.message')}</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder={t('contact.messagePlaceholder')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default MessageForm;