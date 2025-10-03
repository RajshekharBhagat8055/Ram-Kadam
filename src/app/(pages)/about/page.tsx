"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainHeading from "@/components/MainHeading";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, Heart, Award, Star } from "lucide-react";
import ClientOnly from "@/components/ClientOnly";

const AboutPage = () => {
    const { t } = useTranslation();

    const achievements = [
        {
            icon: <Users className="h-6 w-6" />,
            title: "Community Service",
            description: "Organized free pilgrimage tours for lakhs of devotees"
        },
        {
            icon: <Heart className="h-6 w-6" />,
            title: "Crisis Response",
            description: "Brought water trains (Jaldoot) to Latur during 2015 drought"
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: "Cultural Engagement",
            description: "Iconic Dahi Handi events in Mumbai with Bollywood celebrities"
        },
        {
            icon: <Star className="h-6 w-6" />,
            title: "Political Leadership",
            description: "Multiple terms as MLA from Ghatkopar West"
        }
    ];

    const timeline = [
        {
            year: "2009",
            event: "First elected as MLA from Ghatkopar West (MNS)"
        },
        {
            year: "2014",
            event: "Joined Bharatiya Janata Party (BJP)"
        },
        {
            year: "2014",
            event: "Re-elected as MLA from Ghatkopar West"
        },
        {
            year: "2015",
            event: "Brought water trains (Jaldoot) to Latur during drought"
        },
        {
            year: "2019",
            event: "Re-elected as MLA for third consecutive term"
        }
    ];

    return (
        <section className='relative w-full overflow-hidden min-h-screen'>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-4 border-orange-500 shadow-2xl">
                                <Image 
                                    src="/ram-kadam-potrait.png" 
                                    alt="Ram Kadam" 
                                    fill 
                                    className="object-cover" 
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <Image 
                                    src="/bjp-logo-color.png" 
                                    alt="BJP Logo" 
                                    width={48} 
                                    height={48} 
                                    className="object-contain" 
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <ClientOnly>
                                <MainHeading className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 leading-tight">
                                    {t("about.title")}
                                </MainHeading>
                            </ClientOnly>
                            
                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <span>Ghatkopar West, Mumbai</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-5 w-5" />
                                    <span>MLA since 2009</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                                    Bharatiya Janata Party
                                </Badge>
                                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                    MLA Ghatkopar West
                                </Badge>
                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                    Community Leader
                                </Badge>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Main Content */}
            <MaxWidthWrapper className="py-16">
                <div className="space-y-16">
                    {/* Biography Section */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
                                <Users className="h-6 w-6" />
                                Political Journey & Service
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <ClientOnly>
                                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                                    <p className="text-lg leading-relaxed">{t("about.paragraph1")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph2")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph3")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph4")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph5")}</p>
                                </div>
                            </ClientOnly>
                        </CardContent>
                    </Card>

                    {/* Additional Biography Section */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
                                <Heart className="h-6 w-6" />
                                Leadership & Public Service
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <ClientOnly>
                                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                                    <p className="text-lg leading-relaxed">{t("about.paragraph6")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph7")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph8")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph9")}</p>
                                    <p className="text-lg leading-relaxed">{t("about.paragraph10")}</p>
                                </div>
                            </ClientOnly>
                        </CardContent>
                    </Card>

                    {/* Achievements Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            Key Achievements & Initiatives
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {achievements.map((achievement, index) => (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                                            {achievement.icon}
                                        </div>
                                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm">
                                            {achievement.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
                                <CalendarDays className="h-6 w-6" />
                                Political Timeline
                            </CardTitle>
                            <CardDescription>
                                Key milestones in Ram Kadam&apos;s political career
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {timeline.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-orange-600 font-bold text-sm">{item.year}</span>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <p className="text-gray-700">{item.event}</p>
                                        </div>
                                        {index < timeline.length - 1 && (
                                            <div className="absolute left-8 mt-16 w-0.5 h-8 bg-orange-200"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Vision Section */}
                    <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-orange-600">
                                Vision for the Future
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg text-gray-700 space-y-4">
                                <p>
                                    Ram Kadam continues to work tirelessly for the development and welfare of his constituents. 
                                    His vision encompasses sustainable development, community empowerment, and ensuring that 
                                    every citizen has access to basic amenities and opportunities for growth.
                                </p>
                                <p>
                                    Through his dedicated service and innovative initiatives, he aims to create a model 
                                    constituency that serves as an example of effective governance and community development.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default AboutPage;