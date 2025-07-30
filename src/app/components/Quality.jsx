import Image from "next/image";
import imageQuality from "@/app/assets/images/about/image-quality.jpg";
export default function QualitySection() {
  return (
    <section className=" bg-darkCryanBlue rounded-[10px] text-center px-6 pb-[3.75rem] flex flex-col">
      <Image src={imageQuality} className="-mt-[4.875rem] rounded-lg" />
      <h2 className="text-[1.75rem] font-fraunces mt-16 leading-7 font-black text-background mb-6">
        Uncompromising quality
      </h2>
      <p className="leading-6 text-background font-barlow">
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </section>
  );
}
