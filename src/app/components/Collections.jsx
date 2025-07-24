import { PRODUCT_COLLECTION } from "../utils/data";
import Collection from "./Collection";

export default function Collections() {
  return (
    <section className="my-[7.5rem] text-center">
      <h2 className="font-fraunces text-[2.5rem] font-black leading-[4.5rem] text-grey mb-3.5">
        our collection
      </h2>
      <ul className="flex flex-col gap-12">
        {PRODUCT_COLLECTION.map((collection) => (
          <Collection key={collection.name} collection={collection} />
        ))}
      </ul>
    </section>
  );
}
