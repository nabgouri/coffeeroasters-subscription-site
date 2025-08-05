import { PRODUCT_COLLECTION } from "../utils/data";
import Collection from "./Collection";

export default function Collections() {
  return (
    <section className="mb-[7.5rem] md:mb-36 text-center ">
      <h2 className="font-fraunces text-[2.5rem] md:text-8xl xl:text-[9.375rem] md:mb-0 font-black leading-[4.5rem]  text-grey mb-3.5 z-10 relative ">
        our collection
      </h2>

      <ul className="flex flex-col gap-12 xl:flex-row z-0 relative">
        {PRODUCT_COLLECTION.map((collection) => (
          <Collection key={collection.name} collection={collection} />
        ))}
      </ul>
    </section>
  );
}
