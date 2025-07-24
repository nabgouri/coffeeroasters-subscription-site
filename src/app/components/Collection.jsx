import Image from "next/image";

export default function Collection({ collection }) {
  const { name, image, description } = collection;
  return (
    <li className="flex items-center flex-col justify-center">
      <Image src={image} />
      <h3 className="font-fraunces text-2xl font-black leading-8 text-darkCryanBlue mt-6 mb-4 ">
        {name}
      </h3>
      <p className="font-barlow text-base font-normal text-darkCryanBlue">
        {description}
      </p>
    </li>
  );
}
