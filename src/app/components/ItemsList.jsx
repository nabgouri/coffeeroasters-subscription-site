import ItemList from "./ItemList";

export default function ItemsList({
  ListType = "ul",
  items = [],
  title,
  children,
  ulClassName,
  isPrimaryTheme = true,
}) {
  const primaryTheme = isPrimaryTheme
    ? "text-darkCryanBlue "
    : "text-background bg-darkCryanBlue";
  return (
    <section className={`mt-[43rem] ${primaryTheme} rounded-[10px] `}>
      <h2 className="font-fraunces text-2xl font-black leading-8 text-grey mb-20 text-center">
        {title}
      </h2>
      <ul
        className={`flex items-center justify-center flex-col gap-14  ${ulClassName}`}
      >
        {items.map((item, index) => (
          <ItemList item={item} index={index} key={index} />
        ))}
      </ul>
      {children}
    </section>
  );
}
