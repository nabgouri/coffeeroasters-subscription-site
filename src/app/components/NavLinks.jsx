import Link from "next/link";

export default function NavLinks({ className, isMobileNav }) {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Create your plan", href: "plan" },
  ];
  const linkStyle = isMobileNav
    ? "font-fraunces font-black text-2xl leading-8 text-darkCryanBlue"
    : "font-barlow text-xs uppercase font-bold text-grey";
  return (
    <nav className={`items-center gap-8 ${className}`}>
      {links.map(({ label, href }) => (
        <Link href={href} key={href} className={linkStyle}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
