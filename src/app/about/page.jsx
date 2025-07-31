import Hero from "../components/Hero";
import aboutImage from "@/app/assets/images/about/hero-images/image-hero-whitecup-mobile.jpg";
import aboutImageTablet from "@/app/assets/images/about/hero-images/image-hero-whitecup-tablet.jpg";

import aboutImageDesktop from "@/app/assets/images/about/hero-images/aboutImage-desktop.png";
import CommitmentSection from "../components/CommitmentSection";
import QualitySection from "../components/Quality";
import ItemsList from "../components/ItemsList";
import illustrationaAustralia from "@/app/assets/images/about/country-images/illustration-australia.svg";
import illustraionCanada from "@/app/assets/images/about/country-images/illustration-canada.svg";
import illustraionUk from "@/app/assets/images/about/country-images/illustration-uk.svg";

export default function AboutPage() {
  const providers = [
    {
      title: "United Kingdom",
      description: "68  Asfordby Rd Alcaston SY6 1YA +44 1241 918425",
      image: illustraionUk,
    },
    {
      title: "Canada",
      description:
        "1528  Eglinton Avenue Toronto Ontario M4P 1A6 +1 416 485 2997",
      image: illustraionCanada,
    },
    {
      title: "Australia",
      description: "36 Swanston Street Kewell Victoria +61 4 9928 3629",
      image: illustrationaAustralia,
    },
  ];
  return (
    <article>
      <Hero
        background={aboutImage}
        backgroundTablet={aboutImageTablet}
        backgroundDesktop={aboutImageDesktop}
        title="About Us"
        className="bg-black/40 bg-left bg-blend-overlay"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment"
      />
      <CommitmentSection />
      <QualitySection />
      <ItemsList
        title="Our headquarters"
        items={providers}
        ulClassName="gap-20"
      />
    </article>
  );
}
