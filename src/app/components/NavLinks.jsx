import Link from "next/link";

export default function NavLinks({ className }) {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Create your plan", href: "/payementPlan" },
  ];
  return (
    <nav className={`items-center gap-8 ${className}`}>
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
