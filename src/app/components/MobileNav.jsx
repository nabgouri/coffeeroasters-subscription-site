import NavLinks from "./NavLinks";

export default function MobileNav() {
  return (
    <div className="absolute start-0 h-full w-full py-20 transition-opacity duration-300 ease-in bg-gradient-to-b from-[#fefcf7] from-45% to-transparent to-100%">
      <NavLinks
        className={`text-darkCryanBlue flex flex-col`}
        isMobileNav={true}
      />
    </div>
  );
}
