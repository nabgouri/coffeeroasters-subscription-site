import Image from "next/image";

export default function ItemList({ item, index }) {
  const { title, description, image } = item;
  return (
    <li className="text-center flex flex-col items-center">
      {image ? (
        <Image src={image} alt="" />
      ) : (
        <div className="text-7xl leading-[4.5rem] font-black text-paleOrange font-fraunces">
          0{index + 1}
        </div>
      )}
      <h3 className="font-fraunces  font-black text-[1.75rem] leading-8  my-6">
        {title}
      </h3>
      <p className="text-base leading-6 font-barlow ">{description}</p>
    </li>
  );
}
