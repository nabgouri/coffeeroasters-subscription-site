import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import facebookImg from "@/app/assets/svg/facebook-icon.svg";
import instagramImg from "@/app/assets/svg/instagram-icon.svg";
import xImg from "@/app/assets/svg/X-icon.svg";
import footerLogo from "@/app/assets/svg/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="mx-6 bg-[#2C343E] py-14 xl:px-[5.25rem] mt-[7.5rem] md:mt-36 xl:mt-[10.5rem]  flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-12 ">
      <Image src={footerLogo} alt="footer logo" />
      <NavLinks className=" flex flex-col md:flex-row "></NavLinks>
      <ul className="flex items-center gap-6  mb-12 xl:mb-0">
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
