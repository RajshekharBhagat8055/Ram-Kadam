import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Query", href: "/query" },
    ];

    const socialLinks = [
        { name: "Facebook", href: "#", icon: FaFacebook },
        { name: "Twitter", href: "#", icon: FaTwitter },
        { name: "Instagram", href: "#", icon: FaInstagram },
        { name: "YouTube", href: "#", icon: FaYoutube },
        { name: "LinkedIn", href: "#", icon: FaLinkedin },
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
                                            src="/bgp-logo-color.png" 
                                            alt="BJP Logo" 
                                            fill 
                                            className="object-cover aspect-square" 
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-orange-500 tracking-tight">RAM KADAM</h3>
                                        <p className="text-slate-600 text-xs md:text-sm font-medium">Serving the Community</p>
                                    </div>
                                </div>
                                
                                {/* Tagline */}
                                <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                                    Committed to bringing positive change and development to our community through dedicated service and leadership.
                                </p>
                            </div>
                            
                            {/* Quick Links */}
                            <div>
                                <h4 className="text-base md:text-lg font-bold mb-4 text-orange-500 uppercase tracking-wide">Quick Links</h4>
                                <ul className="space-y-2.5">
                                    {quickLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link 
                                                href={link.href}
                                                className="inline-flex items-center text-slate-600 hover:text-orange-500 transition-all duration-200 text-sm md:text-base group"
                                            >
                                                <span className="mr-2 text-orange-500 group-hover:mr-3 transition-all">›</span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Information Column */}
                        <div className="space-y-6 text-center md:text-left">
                            <h4 className="text-base md:text-lg font-bold mb-6 text-orange-500 uppercase tracking-wide">Contact Information</h4>
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdLocationOn className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">Office Address</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            BJP Office, Main Street<br />
                                            Mumbai, Maharashtra 400001<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Phone */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdPhone className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">Phone</p>
                                        <a href="tel:+919876543210" className="text-slate-600 hover:text-orange-500 text-sm transition-colors">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Email */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdEmail className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">Email</p>
                                        <a href="mailto:contact@ramkadam.com" className="text-slate-600 hover:text-orange-500 text-sm transition-colors">
                                            contact@ramkadam.com
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Office Hours */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                                        <MdAccessTime className="text-orange-500 group-hover:text-white text-xl transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-semibold text-sm mb-1">Office Hours</p>
                                        <p className="text-slate-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media & Newsletter Column */}
                        <div className="space-y-6 text-center md:text-left lg:col-span-1">
                            <div>
                                <h4 className="text-base md:text-lg font-bold mb-6 text-orange-500 uppercase tracking-wide">Stay Connected</h4>
                                
                                {/* Social Links */}
                                <p className="text-slate-600 text-sm mb-4">Follow us on social media for updates</p>
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
                                © {currentYear} Ram Kadam. All rights reserved.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                                <Link 
                                    href="/privacy-policy" 
                                    className="text-slate-600 hover:text-orange-500 text-xs transition-colors duration-200 hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                                <span className="text-slate-400">•</span>
                                <Link 
                                    href="/terms-of-service" 
                                    className="text-slate-600 hover:text-orange-500 text-xs transition-colors duration-200 hover:underline"
                                >
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-slate-600 text-xs md:text-sm">
                                Designed & Developed by{" "}
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