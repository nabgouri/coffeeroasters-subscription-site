import ItemList from "./ItemList";

export default function ItemsList({
  ListType = "ul",
  items = [],
  title,
  children,
  ulClassName,
  isPrimaryTheme = true,
  className,
}) {
  const primaryTheme = isPrimaryTheme
    ? "text-darkCryanBlue bg-background "
    : "text-background bg-darkCryanBlue py-20 px-6 mb-[7.5rem] xl:ps-[5.5rem] xl:pe-[9.5rem] ";
  return (
    <section className={` ${primaryTheme} rounded-[10px] ${className} `}>
      {title && (
        <h2 className="font-fraunces text-2xl font-black leading-8 text-grey mb-20 md:mb-10  text-center md:text-start">
          {title}
        </h2>
      )}
      {ListType === "ol" && (
        <div className="w-[80%] md:flex justify-between items-center relative hidden mb-12 bg-inherit">
          <div className="w-8 h-8 rounded-[50%] border-darkCryan border-solid bg-red border-2 z-20 bg-inherit "></div>
          <div className="w-8 h-8 rounded-[50%] border-darkCryan border-2 z-20 bg-inherit "></div>
          <div className="w-8 h-8 rounded-[50%] border-darkCryan border-2 z-20 bg-inherit "></div>
          <div className="w-full h-0.5 bg-paleOrange absolute z-0"></div>
        </div>
      )}
      <ul
        className={`flex items-center md:items-baseline justify-center flex-col md:flex-row gap-14    ${ulClassName}`}
      >
        {items.map((item, index) => (
          <ItemList item={item} index={index} key={index} />
        ))}
      </ul>
      {children}
    </section>
  );
}
