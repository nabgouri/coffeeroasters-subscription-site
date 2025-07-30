export default function Option({ option }) {
  const { title, description } = option;
  return (
    <li className="bg-[#F4F1EB] p-6 rounded-lg">
      <h3 className="font-fraunces text-2xl leading-8 text-darkCryanBlue font-black mb-2">
        {title}
      </h3>
      <p className="text-darkCryanBlue font-barlow leading-7">{description}</p>
    </li>
  );
}
