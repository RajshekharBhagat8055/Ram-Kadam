"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainHeading from "@/components/MainHeading";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, Heart, Award, Star } from "lucide-react";
import ClientOnly from "@/context/ClientOnly";

const AboutPage = () => {
    const { t } = useTranslation();

    const achievements = [
        {
            icon: <Users className="h-6 w-6" />,
            title: t('aboutPage.achievements.communityService.title'),
            description: t('aboutPage.achievements.communityService.description')
        },
        {
            icon: <Heart className="h-6 w-6" />,
            title: t('aboutPage.achievements.crisisResponse.title'),
            description: t('aboutPage.achievements.crisisResponse.description')
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: t('aboutPage.achievements.culturalEngagement.title'),
            description: t('aboutPage.achievements.culturalEngagement.description')
        },
        {
            icon: <Star className="h-6 w-6" />,
            title: t('aboutPage.achievements.politicalLeadership.title'),
            description: t('aboutPage.achievements.politicalLeadership.description')
        }
    ];

    const timeline = [
        {
            year: "2009",
            event: t('aboutPage.timeline.2009')
        },
        {
            year: "2014",
            event: t('aboutPage.timeline.2014_join')
        },
        {
            year: "2014",
            event: t('aboutPage.timeline.2014_re_elected')
        },
        {
            year: "2015",
            event: t('aboutPage.timeline.2015')
        },
        {
            year: "2019",
            event: t('aboutPage.timeline.2019')
        }
    ];

    return (
        <section className='relative w-full overflow-hidden my-20'>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
                        <div className="relative">
                            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-4 border-orange-500 shadow-2xl">
                                <Image
                                    src="/ram-kadam-potrait.png"
                                    alt="Ram Kadam"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute size-32 bg-orange-100 shadow-md shadow-black/50 rounded-full -bottom-9 -right-9 ring-2 ring-orange-500 flex items-center justify-center">
                                <Image src="/bjp-logo-color.png" alt="BJP Logo" height={100} width={100} className="object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <ClientOnly>
                                <MainHeading className="text-3xl md:text-4xl lg:text-6xl font-bold text-orange-600 leading-tight">
                                    {t("about.title")}
                                </MainHeading>
                            </ClientOnly>

                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <span>{t('aboutPage.location')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-5 w-5" />
                                    <span>{t('aboutPage.mlaSince')}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                                    {t('aboutPage.badges.bjp')}
                                </Badge>
                                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                    {t('aboutPage.badges.mlaGhatkopar')}
                                </Badge>
                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                    {t('aboutPage.badges.communityLeader')}
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
                                {t('aboutPage.sections.journey')}
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
                                {t('aboutPage.sections.leadership')}
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
                            {t('aboutPage.sections.keyAchievements')}
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
                                {t('aboutPage.sections.politicalTimeline')}
                            </CardTitle>
                            <CardDescription>
                                {t('aboutPage.sections.timelineDescription')}
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
                                {t('aboutPage.sections.visionForFuture')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg text-gray-700 space-y-4">
                                <p>{t('aboutPage.vision.p1')}</p>
                                <p>{t('aboutPage.vision.p2')}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default AboutPage;