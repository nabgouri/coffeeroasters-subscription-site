import Button from "./components/Button";
import Collections from "./components/Collections";
import Credentials from "./components/Credentials";
import Hero from "./components/Hero";
import homeImage from "@/app/assets/images/home/homeImage-mobile.png";
export default function Home() {
  return (
    <article>
      <Hero
        title="Great coffee made simple."
        description="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        background={homeImage}
      >
        <Button>Create your plan</Button>
      </Hero>
      <Collections />
      <Credentials />
    </article>
  );
}
