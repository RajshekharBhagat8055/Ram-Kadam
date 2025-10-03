"use client"
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    const quickLinks = [
        { key: "home", href: "/" },
        { key: "about", href: "/about" },
        { key: "contact", href: "/contact" },
        { key: "query", href: "/query" },
    ];

    const socialLinks = [
        { name: "Facebook", href: "https://www.facebook.com/ram.kadam/", icon: FaFacebook },
        { name: "Twitter", href: "https://x.com/ramkadam", icon: FaTwitter },
        { name: "Instagram", href: "https://www.instagram.com/ramkadam_official/?hl=en", icon: FaInstagram },
        { name: "YouTube", href: "https://www.youtube.com/@ramkadam7019", icon: FaYoutube },
    ];

    return (
        <footer className="bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 border-t-4 border-orange-500 shadow-inner">
            <MaxWidthWrapper>
                {/* Main Footer Content */}
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        
                        {/* Brand & Quick Links Column */}
                        <div className="space-y-6 text-center md:text-left">
                            {/* Brand Section */}
                            <div className="flex flex-col items-center md:items-start gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative size-16 md:size-14">
                                        <Image 
                                            src="/bjp-logo-color.png" 
                                            alt="BJP Logo" 
                                            fill 
                                            className="object-cover aspect-square" 
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-orange-500 tracking-tight">{t("navbar.name")}</h3>
                                        <p className="text-slate-600 text-xs md:text-sm font-medium">{t("footer.tagline")}</p>
                                    </div>
                                </div>
                                
                                {/* Tagline */}
                                <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                                    {t("footer.description")}
                                </p>
                            </div>
                            
                            {/* Quick Links */}
                            <div>
                                <h4 className="text-base md:text-lg font-bold mb-4 text-orange-500 uppercase tracking-wide">{t("footer.quickLinks")}</h4>
                                <ul className="space-y-2.5">
                                    {quickLinks.map((link) => (
                                        <li key={link.key}>
                                            <Link 
                                                href={link.href}
                                                className="inline-flex items-center text-slate-600 hover:text-orange-500 transition-all duration-200 text-sm md:text-base group"
                                            >
                                                <span className="mr-2 text-orange-500 group-hover:mr-3 transition-all">›</span>
                                                {t(`navbar.${link.key}`)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Information Column */}
                        <div className="space-y-6 text-center md:text-left">
                            <h4 className="text-base md:text-lg font-bold mb-6 text-orange-500 uppercase tracking-wide">{t("footer.contactInfo")}</h4>
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdLocationOn className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">{t("footer.officeAddress")}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                                            {t("footer.address")}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Phone */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdPhone className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">{t("footer.phone")}</p>
                                        <a href="tel:+919876543210" className="text-slate-600 hover:text-orange-500 text-sm transition-colors">
                                            {t("footer.phoneNumber")}
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Email */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdEmail className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">{t("footer.email")}</p>
                                        <a href="mailto:contact@ramkadam.com" className="text-slate-600 hover:text-orange-500 text-sm transition-colors">
                                            {t("footer.emailAddress")}
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Office Hours */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdAccessTime className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">{t("footer.officeHours")}</p>
                                        <p className="text-slate-600 text-sm">{t("footer.hours")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media & Newsletter Column */}
                        <div className="space-y-6 text-center md:text-left lg:col-span-1">
                            <div>
                                <h4 className="text-base md:text-lg font-bold mb-6 text-orange-500 uppercase tracking-wide">{t("footer.stayConnected")}</h4>
                                
                                {/* Social Links */}
                                <p className="text-slate-600 text-sm mb-4">{t("footer.followUs")}</p>
                                <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                                    {socialLinks.map((social) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <Link
                                                key={social.name}
                                                href={social.href}
                                                className="flex items-center justify-center w-11 h-11 bg-white hover:bg-orange-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-200"
                                                aria-label={social.name}
                                                title={social.name}
                                            >
                                                <IconComponent className="text-lg text-slate-600 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright & Legal Section */}
                <div className="border-t border- py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <div className="space-y-2">
                            <p className="text-slate-700 text-sm font-medium">
                                {t("footer.copyright", { year: currentYear })}
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                                <Link 
                                    href="/privacy-policy" 
                                    className="text-slate-600 hover:text-orange-500 text-xs transition-colors duration-200 hover:underline"
                                >
                                    {t("footer.privacyPolicy")}
                                </Link>
                                <span className="text-slate-400">•</span>
                                <Link 
                                    href="/terms-of-service" 
                                    className="text-slate-600 hover:text-orange-500 text-xs transition-colors duration-200 hover:underline"
                                >
                                    {t("footer.termsOfService")}
                                </Link>
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-slate-600 text-xs md:text-sm">
                                {t("footer.designedBy")}{" "}
                                <Link 
                                    href="https://www.arkasoftware.in/" 
                                    className="text-orange-500 hover:text-orange-600 transition-colors duration-200 font-semibold inline-flex items-center gap-1 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Arka Infotech
                                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}