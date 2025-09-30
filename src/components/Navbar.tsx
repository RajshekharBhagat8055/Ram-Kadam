"use client"
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    return (
        <nav className="fixed top-0 w-full py-2 bg-slate-50  z-[9999]  border-b-2 border-orange-500 shadow-md">
            <MaxWidthWrapper className="h-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="relative size-14">
                        <Image src="/bgp-logo-color.png" alt="BJP Logo" fill className="object-cover aspect-square" />
                    </Link>
                    <h1 className="text-3xl font-bold">RAM KADAM</h1>
                </div>
                <div className="flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link href={link.href} key={link.label} className="relative">
                            <h1 className={cn("relative z-20 text-lg font-bold transition-all duraiton-500", pathname === link.href ? "text-orange-500" : "text-gray-500")}>{link.label}</h1>
                            {pathname === link.href && (
                                <motion.span layoutId="underline" className="absolute top-full inset-x-0 h-1 bg-orange-500 rounded-full" />
                            )}
                        </Link>
                    ))}
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}