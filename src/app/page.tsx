"use client"
import AboutSection from "@/components/Landing Components/About";
import Hero, { HeroSlide } from "@/components/Landing Components/Hero";
import { useTranslation } from "react-i18next";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  const { t } = useTranslation();

  // Configure your hero slides here
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      backgroundImage: "/background-one.png",
      personImage: "/ram-kadam-two.png",
      title: t("hero.title1"),
    },
    {
      id: 2,
      backgroundImage: "/background-two.png",
      personImage: "/ram-kadam-one.png",
      title: t("hero.title2"),
    },
    {
      id: 3,
      backgroundImage: "/background-four.png",
      personImage: "/ram-kadam-one.png",
      title: t("hero.title3"),
    },
  ];

  return (
    <div className="">
      <ClientOnly>
        <Hero slides={heroSlides} autoPlayInterval={5000} />
      </ClientOnly>
      <AboutSection />
    </div>
  );
}
