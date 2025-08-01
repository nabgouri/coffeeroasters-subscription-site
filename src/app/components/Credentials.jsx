import qualityImage from "@/app/assets/images/home/icon-coffee-bean.svg";
import giftImage from "@/app/assets/images/home/icon-gift.svg";
import shippingImage from "@/app/assets/images/home/icon-truck.svg";
import CredentialCard from "./CredentialCard";

export default function Credentials() {
  const credentialsInfo = [
    {
      image: qualityImage,
      title: "Best quality",
      description:
        "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      image: giftImage,
      title: "Exclusive benefits",
      description:
        "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      image: shippingImage,
      title: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];
  return (
    <section className=" px-6 xl:px-[5.25rem] pt-16 bg-[#2C343E] text-center max-h-[60rem] md:max-h-[45rem] xl:max-h-[34rem] rounded-[10px] ">
      <h2 className="text-background text-[1.75rem] xl:text-[2.5rem] font-black leading-7 font-fraunces">
        Why choose us?
      </h2>
      <p className="text-background mt-6 mb-16 xl:px-[17.5rem]">
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <ul className="flex flex-col gap-6 xl:flex-row ">
        {credentialsInfo.map((credential) => (
          <CredentialCard key={credential.title} credential={credential} />
        ))}
      </ul>
    </section>
  );
}
