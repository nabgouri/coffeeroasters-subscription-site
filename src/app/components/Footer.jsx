import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Footer({ siteLogo }) {
  return (
    <footer>
      <Image src={siteLogo} alt="footer logo" />
      <NavLinks></NavLinks>
    </footer>
  );
}
