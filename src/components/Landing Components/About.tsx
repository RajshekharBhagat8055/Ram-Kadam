import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MainHeading from "../MainHeading";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 relative w-full overflow-hidden">
            <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-orange-500">
                    <Image src="/ram-kadam-potrait.png" alt="Ram Kadam" fill className="object-cover" />
                </div>
                <div className="relative flex flex-col gap-4">
                    <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <Image src="/bjp-logo-black-white.png" alt="BJP Logo" fill className="object-cover absolute top-0 left-0 opacity-5 select-none" />
                    </div>
                    <MainHeading className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">Ram Kadam: A Journey of Service and Dedication</MainHeading>
                    <div className="text-base text-gray-700 flex flex-col gap-6 text-justify font-semibold">
                        <p className="text-base">Ram Kadam’s political journey reflects resilience, dedication, and a deep commitment to public service. Beginning his career with the Maharashtra Navnirman Sena (MNS), he was first elected as the MLA from Ghatkopar West in 2009. Even in his early days, his passion for representing the people was evident. In 2014, Ram Kadam took a defining step by joining the Bharatiya Janata Party (BJP), where he has since secured the trust of his constituency across multiple terms, winning in 2014 and again in 2019.</p>
                        <p className="text-base">His service has always extended beyond politics. From organizing free pilgrimage tours for lakhs of devotees to Tirupati, Kashi, Ajmer Sharif, Palitana, Nashik, and Shirdi, to supporting night-shift workers with free Odomos, and even providing driving classes for first-time voters, Kadam has consistently focused on initiatives that directly impact people’s lives.</p>
                        <p className="text-base">He is also known for his efforts in times of crisis. During the 2015 drought, Kadam was instrumental in bringing water trains (Jaldoot) to Latur, easing the burden of thousands. His Jalyukta Shivir initiatives further strengthened water conservation and community support.</p>
                        <p className="text-base">Beyond service, Ram Kadam is celebrated for his cultural engagement. His Dahi Handi events in Mumbai, often graced by Bollywood celebrities, are among the city’s most iconic festive celebrations, blending tradition with community spirit.</p>
                        <p className="text-base">Through his leadership, Ram Kadam continues to embody the qualities of a people’s representative — accessible, action-driven, and committed to uplifting the lives of his constituents. His journey is a testament to the power of perseverance and the trust people place in those who work tirelessly for their well-being.</p>
                        <div className="flex justify-center">
                            <Link className={cn(buttonVariants({variant:"default"}))} href="/about">Read More</Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}