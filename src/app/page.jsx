import Button from "./components/Button";
import Collections from "./components/Collections";
import Credentials from "./components/Credentials";
import Hero from "./components/Hero";
import homeImage from "@/app/assets/images/home/hero-images/image-hero-coffeepress-mobile.jpg";
import homeImageDesktop from "@/app/assets/images/home/hero-images/image-hero-coffeepress-desktop.jpg";
import homeImageTablet from "@/app/assets/images/home/hero-images/image-hero-coffeepress-tablet.jpg";
import ItemsList from "@/app/components/ItemsList";
export default function Home() {
  const instructions = [
    {
      title: "Pick your coffee",
      description:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      title: "Choose the frequency",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      title: "Receive and enjoy!",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning  world-class coffees curated to provide a distinct tasting experience.",
    },
  ];
  return (
    <article>
      <Hero
        title="Great coffee made simple."
        description="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        background={homeImage}
        backgroundTablet={homeImageTablet}
        backgroundDesktop={homeImageDesktop}
        className="bg-right-top"
      >
        <Button>Create your plan</Button>
      </Hero>
      <Collections />
      <Credentials />
      <ItemsList
        className="mt-[43rem] "
        title="How it works"
        items={instructions}
        ulClassName="gap-14"
      >
        <Button className="mt-20 md:mt-11">Create Your Plan</Button>
      </ItemsList>
    </article>
  );
}
