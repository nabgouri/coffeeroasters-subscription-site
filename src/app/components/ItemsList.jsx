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
    ? "text-darkCryanBlue  "
    : "text-background bg-darkCryanBlue py-20 px-6 mb-[7.5rem]";
  return (
    <section className={` ${primaryTheme} rounded-[10px] ${className} `}>
      {title && (
        <h2 className="font-fraunces text-2xl font-black leading-8 text-grey mb-20 md:mb-10h  text-center md:text-start">
          {title}
        </h2>
      )}
      <ul
        className={`flex items-center md:items-baseline justify-center flex-col md:flex-row gap-14 md:border-t-[2px]  border-paleOrange  ${ulClassName}`}
      >
        {items.map((item, index) => (
          <ItemList item={item} index={index} key={index} />
        ))}
      </ul>
      {children}
    </section>
  );
}
