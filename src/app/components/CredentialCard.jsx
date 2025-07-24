import Image from "next/image";

export default function CredentialCard({ credential }) {
  const { title, description, image } = credential;
  return (
    <li className="px-3 pt-[4.5rem] pb-[3.25rem] bg-darkCryan flex flex-col justify-center items-center rounded-lg ">
      <Image src={image} alt="credetial image" />
      <h3 className="font-fraunces text-2xl font-black leading-8 text-background mt-14 mb-6 ">
        {title}
      </h3>
      <p className="font-barlow text-base font-normal text-background">
        {description}
      </p>
    </li>
  );
}
