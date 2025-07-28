import Hero from "../components/Hero";
import aboutImage from "@/app/assets/images/about/hero-images/aboutImage-mobile.png";
import aboutImageDesktop from "@/app/assets/images/about/hero-images/aboutImage-desktop.png";
export default function AboutPage() {
  return (
    <article>
      <Hero
        background={aboutImage}
        backgroundDesktop={aboutImageDesktop}
        title="About Us"
        className="bg-black/40 bg-left bg-blend-overlay"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in "
      />
    </article>
  );
}
