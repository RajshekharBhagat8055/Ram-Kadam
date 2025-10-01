"use client"
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import MainHeading from "./MainHeading";

const navLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Contact",
        href: "/contact"
    },
    {
        label: "Query",
        href: "/query"
    },
]

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full py-2 bg-slate-50 z-[9999] border-b-2 border-orange-500 shadow-md">
            <MaxWidthWrapper className="h-full flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="relative size-12 md:size-14">
                        <Image src="/bgp-logo-color.png" alt="BJP Logo" fill className="object-cover aspect-square" />
                    </Link>
                    <MainHeading className="text-2xl md:text-5xl tracking-wide font-bold">RAM KADAM</MainHeading>
                </div>

                {/* Desktop Navigation - Hidden on Mobile */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link href={link.href} key={link.label} className="relative">
                            <MainHeading className={cn("relative z-20 text-lg font-bold transition-all duration-500", pathname === link.href ? "text-orange-500" : "text-gray-500")}>{link.label}</MainHeading>
                            {pathname === link.href && (
                                <motion.span layoutId="underline" className="absolute top-full inset-x-0 h-1 bg-orange-500 rounded-full" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu - Visible on Mobile Only */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="hover:bg-orange-500/10">
                            <Menu className="size-6 text-gray-700" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-50">
                        <SheetHeader>
                            <SheetTitle className="flex items-center gap-2">
                                <div className="relative size-10">
                                    <Image src="/bgp-logo-color.png" alt="BJP Logo" fill className="object-cover aspect-square" />
                                </div>
                                <span className="text-xl font-bold">RAM KADAM</span>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link 
                                    href={link.href} 
                                    key={link.label} 
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "relative px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300",
                                        pathname === link.href 
                                            ? "bg-orange-500 text-white shadow-md" 
                                            : "text-gray-700 hover:bg-orange-500/10"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </MaxWidthWrapper>
        </nav>
    )
}