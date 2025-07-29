import Hero from "../components/Hero";
// import subscribeImage from "@/app/assets/images/";
import ItemsList from "../components/ItemsList";
export default function SubscribePage() {
  return (
    <article>
      <Hero
        // background={homeImage}
        // backgroundDesktop={homeImageDesktop}
        title="Create your plan"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
      />
      <ItemsList isPrimaryTheme={false} />
    </article>
  );
}
