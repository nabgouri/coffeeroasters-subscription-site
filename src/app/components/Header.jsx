import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Header({ siteLogo }) {
  return (
    <header className="flex items-center justify-between">
      <Image src={siteLogo} alt="site logo" />
      <NavLinks className="hidden md:flex " />
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu-icon lucide-menu stroke-darkCryanBlue w-4 h-4"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </button>
    </header>
  );
}
