"use client"
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MainHeading from "../MainHeading";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import ClientOnly from "../../context/ClientOnly";

export default function AboutSection() {
    const { t } = useTranslation();
    
    return (
        <section id="about" className="py-16 relative w-full overflow-hidden">
            <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full aspect-square rounded-xl border-2 border-orange-500">
                    <Image src="/ram-kadam-potrait.png" alt="Ram Kadam" fill className="object-cover rounded-xl" />
                    <div className="absolute size-32 bg-orange-100 shadow-md shadow-black/50 rounded-full -bottom-9 -right-9 ring-2 ring-orange-500 flex items-center justify-center">
                        <Image src="/bjp-logo-color.png" alt="BJP Logo" height={100} width={100} className="object-cover" />
                    </div>
                </div>
                <div className="relative flex flex-col gap-4">
                    <div className="absolute inset-0 -z-10">
                    <Image src="/bjp-logo-color.png" alt="BJP Logo" fill className="object-contain opacity-20 select-none" />
                    </div>
                    <ClientOnly>
                        <MainHeading className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">{t("about.title")}</MainHeading>
                    </ClientOnly>
                    <div className="text-base text-gray-700 flex flex-col gap-6 text-justify font-semibold">
                        <ClientOnly>
                            <p className="text-base">{t("about.paragraph1")}</p>
                            <p className="text-base">{t("about.paragraph2")}</p>
                            <p className="text-base">{t("about.paragraph3")}</p>
                            <p className="text-base">{t("about.paragraph4")}</p>
                            <p className="text-base">{t("about.paragraph5")}</p>
                        </ClientOnly>
                        <div className="flex justify-center">
                            <ClientOnly>
                                <Link className={cn(buttonVariants({variant:"default"}))} href="/about">{t("about.readMore")}</Link>
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}