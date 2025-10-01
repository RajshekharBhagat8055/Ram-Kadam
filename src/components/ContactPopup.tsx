"use client"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function ContactPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasBeenDismissed = localStorage.getItem('contact-popup-dismissed');
        if (!hasBeenDismissed) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen])

    function handleClose() {
        localStorage.setItem('contact-popup-dismissed', 'true');
        setIsOpen(false);
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
        >
            <div
                className="relative w-full max-w-md bg-white rounded-xl p-8 shadow-2xl flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    onClick={handleClose}
                    className="absolute top-3 right-3 size-8 rounded-full bg-orange-500 hover:bg-orange-600 p-0"
                    aria-label="Close popup"
                >
                    <X className="size-4 text-white" />
                </Button>

                <h1
                    id="popup-title"
                    className="text-3xl font-semibold text-orange-500 text-center"
                >
                    We&apos;re here for you 24/7
                </h1>

                <p className="text-center text-slate-600">
                    Do&apos;nt wait! Reach out to us at any time of the day or night. Help is just one click or call away.
                </p>

                <Link href="/contact" className="w-full" onClick={handleClose}>
                    <Button size="lg" className="rounded-full w-full">
                        Contact Us
                    </Button>
                </Link>

                <Link
                    href="/contact"
                    className="text-orange-500 hover:text-orange-600 underline underline-offset-4 transition-colors"
                    onClick={handleClose}
                >
                    Learn more
                </Link>
            </div>
        </div>
    )
}