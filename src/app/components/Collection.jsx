import Image from "next/image";

export default function Collection({ collection }) {
  const { name, image, description } = collection;
  return (
    <li className="flex items-center flex-col md:flex-row md:gap-9 justify-center">
      <Image src={image} />
      <div className=" md:text-start">
        <h3 className="font-fraunces text-2xl font-black leading-8 text-darkCryanBlue mt-6 mb-4 ">
          {name}
        </h3>
        <p className="font-barlow text-base font-normal text-darkCryanBlue">
          {description}
        </p>
      </div>
    </li>
  );
}
