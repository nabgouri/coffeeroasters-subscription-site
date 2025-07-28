import ItemList from "./ItemList";

export default function itemsList({
  ListType = "ul",
  items = [],
  title,
  children,
}) {
  return (
    <section className="mt-[43rem] ">
      <h2 className="font-fraunces text-2xl font-black leading-8 text-grey mb-20 text-center">
        {title}
      </h2>
      <ul className=" flex items-center justify-center flex-col gap-14  ">
        {items.map((item, index) => (
          <ItemList item={item} index={index} key={index} />
        ))}
      </ul>
      {children}
    </section>
  );
}
