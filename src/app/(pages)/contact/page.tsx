"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainHeading from "@/components/MainHeading";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdSend } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import ClientOnly from "@/context/ClientOnly";
import MessageForm from "@/components/ui/MessageForm";

export default function Contact() {
    const { t } = useTranslation();

    const contactInfo = [
        {
            icon: <MdLocationOn className="h-6 w-6" />,
            title: t("footer.officeAddress"),
            content: t("footer.address"),
            link: null
        },
        {
            icon: <MdPhone className="h-6 w-6" />,
            title: t("footer.phone"),
            content: t("footer.phoneNumber"),
            link: "tel:+919876543210"
        },
        {
            icon: <MdEmail className="h-6 w-6" />,
            title: t("footer.email"),
            content: t("footer.emailAddress"),
            link: "mailto:contact@ramkadam.com"
        },
        {
            icon: <MdAccessTime className="h-6 w-6" />,
            title: t("footer.officeHours"),
            content: t("footer.hours"),
            link: null
        }
    ];

    const socialLinks = [
        { name: "Facebook", href: "https://www.facebook.com/ram.kadam/", icon: FaFacebook, color: "hover:text-blue-600" },
        { name: "Twitter", href: "https://x.com/ramkadam", icon: FaTwitter, color: "hover:text-blue-400" },
        { name: "Instagram", href: "https://www.instagram.com/ramkadam_official/?hl=en", icon: FaInstagram, color: "hover:text-pink-600" },
        { name: "YouTube", href: "https://www.youtube.com/@ramkadam7019", icon: FaYoutube, color: "hover:text-red-600" },
    ];

    return (
        <section className='relative w-full overflow-hidden min-h-screen py-36'>
            <MaxWidthWrapper>
                <ClientOnly>
                <div className="space-y-16">
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <ClientOnly>
                            <MainHeading className="text-4xl md:text-5xl font-bold text-orange-600">
                                {t("navbar.contact")}
                            </MainHeading>
                        </ClientOnly>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t("footer.description")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
                                        <MdLocationOn className="h-6 w-6" />
                                        {t("footer.contactInfo")}
                                    </CardTitle>
                                    <CardDescription>
                                        {t("contact.getInTouchDesc")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                                {info.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                                                {info.link ? (
                                                    <a 
                                                        href={info.link}
                                                        className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                                                    >
                                                        {info.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Social Media */}
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-orange-600">
                                        {t("footer.stayConnected")}
                                    </CardTitle>
                                    <CardDescription>
                                        {t("footer.followUs")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-4 flex-wrap">
                                        {socialLinks.map((social) => {
                                            const IconComponent = social.icon;
                                            return (
                                                <a
                                                    key={social.name}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-gray-600 transition-all duration-300 hover:bg-orange-500 hover:text-white ${social.color}`}
                                                    aria-label={social.name}
                                                >
                                                    <IconComponent className="h-6 w-6" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <MessageForm />
                    </div>

                    {/* Map Section */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
                                <MdLocationOn className="h-6 w-6" />
                                {t("contact.ourLocation")}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <MdLocationOn className="h-12 w-12 mx-auto mb-4" />
                                    <p className="text-lg font-medium">{t("contact.mapTitle")}</p>
                                    <p className="text-sm">{t("contact.mapDescription")}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </ClientOnly>
            </MaxWidthWrapper>
        </section>
    );
}