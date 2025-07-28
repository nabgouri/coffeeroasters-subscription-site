import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import facebookImg from "@/app/assets/svg/facebook-icon.svg";
import instagramImg from "@/app/assets/svg/instagram-icon.svg";
import xImg from "@/app/assets/svg/X-icon.svg";
import footerLogo from "@/app/assets/svg/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="mx-6 bg-[#2C343E] py-14 mt-[7.5rem] flex flex-col items-center justify-center gap-12 ">
      <Image src={footerLogo} alt="footer logo" />
      <NavLinks className=" flex flex-col "></NavLinks>
      <ul className="flex items-center gap-6  mb-12">
        <Link href="/">
          <Image src={facebookImg} />
        </Link>
        <Link href="/">
          {" "}
          <Image src={instagramImg} />
        </Link>
        <Link href="/">
          {" "}
          <Image src={xImg} />
        </Link>
      </ul>
    </footer>
  );
}
