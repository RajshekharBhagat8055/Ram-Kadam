import AboutSection from "@/components/Landing Components/About";
import Hero, { HeroSlide } from "@/components/Landing Components/Hero";

// Configure your hero slides here
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    backgroundImage: "/background-one.png",
    personImage: "/ram-kadam-two.png",
    title: "Ram Kadam",
  },
  {
    id: 2,
    backgroundImage: "/background-two.png",
    personImage: "/ram-kadam-one.png",
    title: "Serving the Community",
  },
  {
    id: 3,
    backgroundImage: "/background-four.png",
    personImage: "/ram-kadam-one.png",
    title: "Development for All",
  },
];

export default function Home() {
  return (
    <div className="">
      <Hero slides={heroSlides} autoPlayInterval={5000} />
      <AboutSection />
    </div>
  );
}
