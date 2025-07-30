import Hero from "../components/Hero";
import subscribeImage from "@/app/assets/images/subscribe/image-hero-blackcup-mobile.jpg";
import subscribeDesktop from "@/app/assets/images/subscribe/image-hero-blackcup-mobile.jpg";
import ItemsList from "../components/ItemsList";
import SelectorOption from "../components/SelectorOption";
const orderFlow = [
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

const CoffeeCombination = [
  {
    title: "How do you drink your coffee?",
    options: [
      {
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    title: "What type of coffee?",
    options: [
      {
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    title: "How much would you like?",
    options: [
      {
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    title: "Want us to grind them?",
    options: [
      {
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    title: "How often should we deliver?",
    options: [
      {
        title: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        title: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        title: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
export default function SubscribePage() {
  return (
    <article>
      <Hero
        background={subscribeImage}
        backgroundDesktop={subscribeDesktop}
        title="Create your plan"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
      />
      <ItemsList isPrimaryTheme={false} items={orderFlow} />
      {CoffeeCombination.map(({ title, options }) => (
        <SelectorOption title={title} options={options} />
      ))}
    </article>
  );
}
