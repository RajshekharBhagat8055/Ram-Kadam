"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import MainHeading from "../MainHeading"

export interface HeroSlide {
    id: number
    backgroundImage: string
    personImage: string
    title: string
}

interface HeroProps {
    slides: HeroSlide[]
    autoPlayInterval?: number
}

export default function Hero({ slides, autoPlayInterval = 5000 }: HeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, autoPlayInterval)

        return () => clearInterval(timer)
    }, [currentIndex, autoPlayInterval])

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % slides.length)
    }

    const handlePrevious = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    const slideVariants: Variants = {
        enter: {
            opacity: 0,
            scale: 1.1,
        },
        center: {
            zIndex: 1,
            opacity: 1,
            scale: 1,
        },
        exit: {
            zIndex: 0,
            opacity: 0,
            scale: 0.95,
        },
    }

    return (
        <div className="relative w-full md:min-h-screen min-h-[80vh] overflow-hidden bg-slate-900">
            <AnimatePresence initial={false} mode="sync">
                <motion.div
                    key={currentIndex}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        duration: 1.2,
                        ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    className="absolute inset-0"
                >
                    {/* Background Image - Subtle with Zoom */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{
                            duration: autoPlayInterval / 1000,
                            ease: "linear"
                        }}
                    >
                        <Image
                            src={slides[currentIndex].backgroundImage}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                            quality={90}
                        />
                    </motion.div>

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

                    {/* Person Image - Full Height from Bottom */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{
                            delay: 0.3,
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                        className="absolute inset-x-0 bottom-0 h-[85%] md:h-[90%]"
                    >
                        <div className="relative w-full h-full flex items-end justify-center">
                            <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl h-full">
                                <Image
                                    src={slides[currentIndex].personImage}
                                    alt={slides[currentIndex].title}
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                    quality={95}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Title - Overlapping at Bottom */}
                    <div className="relative h-full flex items-end justify-center pb-12 md:pb-16 lg:pb-20 z-10">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.8,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                                className="relative text-center "
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent -z-10" />
                                {/* Epic Title with Multiple Effects */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{
                                        delay: 0.8,
                                        duration: 0.8,
                                        ease: "easeOut"
                                    }}
                                    className="text-3xl font-bold md:text-5xl lg:text-7xl md:font-semibold text-transparent bg-clip-text bg-gradient-to-t from-orange-300 via-orange-500 to-orange-300 text-shadow-2xs leading-tight tracking-tight"
                                >
                                    <MainHeading>{slides[currentIndex].title}</MainHeading>
                                </motion.div>
                            </motion.div>
                            {/* Decorative Line */}
                            <motion.div
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                exit={{ scaleX: 0, opacity: 0 }}
                                transition={{
                                    delay: 0.9,
                                    duration: 0.6,
                                    ease: "easeInOut"
                                }}
                                className="mx-auto hidden md:block mb-6 h-1 max-w-xs bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
                <Button
                    onClick={handlePrevious}
                    className="pointer-events-auto size-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="size-6 text-white" />
                </Button>
                <Button
                    onClick={handleNext}
                    className="pointer-events-auto size-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300"
                    aria-label="Next slide"
                >
                    <ChevronRight className="size-6 text-white" />
                </Button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                ? "bg-orange-500 w-12 h-3"
                                : "bg-white/50 hover:bg-white/70 w-3 h-3"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="absolute top-8 right-8 z-10">
                <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-semibold">
                        {currentIndex + 1} / {slides.length}
                    </span>
                </div>
            </div>
        </div>
    )
}

