export default function OrderFlow() {
  const orderSteps = [
    "Preferences",
    "Bean Type",
    "Quantity",
    "Grind Option",
    "Deliveries",
  ];

  return (
    <ol className="list-decimal flex flex-col gap-6">
      {orderSteps.map((orderStep, index) => {
        return (
          <li
            className={`font-fraunces text-2xl leading-8 pb-6 border-b-[1px] font-black opacity-40 border-grey text-grey  flex gap-7`}
            key={index}
          >
            <span className={`"text-grey"}`}>0{index + 1}</span>
            {orderStep}
          </li>
        );
      })}
    </ol>
  );
}
