import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

export default function Footer({ siteLogo }) {
  return (
    <footer className="mx-6 bg-[#2C343E] py-14 mt-[7.5rem] flex flex-col items-center justify-center gap-12 ">
      <Image src={siteLogo} alt="footer logo" />
      <NavLinks className=" flex flex-col "></NavLinks>
      <ul>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
      </ul>
    </footer>
  );
}
