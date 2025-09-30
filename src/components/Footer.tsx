import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

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
        <footer className="bg-slate-50 text-slate-900 border-t-4 border-orange-500">
            <MaxWidthWrapper>
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Quick Links Column */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="relative size-12">
                                    <Image 
                                        src="/bgp-logo-color.png" 
                                        alt="BJP Logo" 
                                        fill 
                                        className="object-cover aspect-square" 
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-500">RAM KADAM</h3>
                                    <p className="text-slate-600 text-sm">Serving the Community</p>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
                                <ul className="space-y-2">
                                    {quickLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link 
                                                href={link.href}
                                                className="text-slate-600 hover:text-orange-500 transition-colors duration-200 text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Details & Address Column */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Information</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">📍</span>
                                        <div>
                                            <p className="text-slate-700 font-medium">Office Address</p>
                                            <p className="text-slate-600">
                                                BJP Office, Main Street<br />
                                                Mumbai, Maharashtra 400001<br />
                                                India
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="text-orange-500">📞</span>
                                        <div>
                                            <p className="text-slate-700 font-medium">Phone</p>
                                            <p className="text-slate-600">+91 98765 43210</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="text-orange-500">✉️</span>
                                        <div>
                                            <p className="text-slate-700 font-medium">Email</p>
                                            <p className="text-slate-600">contact@ramkadam.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="text-orange-500">🕒</span>
                                        <div>
                                            <p className="text-slate-700 font-medium">Office Hours</p>
                                            <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="border-t border-slate-300 py-6">
                    <div className="flex flex-col items-center space-y-4">
                        <h4 className="text-lg font-semibold text-orange-500">Follow Us</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="flex items-center justify-center w-10 h-10 bg-slate-200 hover:bg-orange-500 rounded-full transition-colors duration-200 group"
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="text-lg text-slate-600 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright & Legal Section */}
                <div className="border-t border-slate-300 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-slate-600 text-sm">
                                © {currentYear} Ram Kadam. All rights reserved.
                            </p>
                            <div className="flex gap-4 mt-2 justify-center md:justify-start">
                                <Link 
                                    href="/privacy-policy" 
                                    className="text-slate-600 hover:text-orange-500 text-sm transition-colors duration-200"
                                >
                                    Privacy Policy
                                </Link>
                                <Link 
                                    href="/terms-of-service" 
                                    className="text-slate-600 hover:text-orange-500 text-sm transition-colors duration-200"
                                >
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                        
                        <div className="text-center md:text-right">
                            <p className="text-slate-600 text-sm">
                                Designed and Developed by{" "}
                                <Link 
                                    href="https://arkainfotech.com" 
                                    className="text-orange-500 hover:text-orange-400 transition-colors duration-200 font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Arka Infotech
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}