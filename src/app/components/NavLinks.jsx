import Link from "next/link";

export default function NavLinks() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Create your plan", href: "/payementPlan" },
  ];
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map(({ label, href }) => (
        <Link
          href={href}
          key={href}
          className="font-barlow text-xs uppercase font-bold text-grey "
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
