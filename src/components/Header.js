import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/music", label: "Music" },
  { href: "/style-finder", label: "Style Finder" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${profile.name} home`}>
        <Image src="/images/logo.png" alt="" width={42} height={42} priority />
        <span>{profile.name}</span>
      </Link>
      <input className="nav-toggle" id="nav-toggle" type="checkbox" aria-label="Open navigation" />
      <label className="nav-button" htmlFor="nav-toggle">
        <span />
        <span />
        <span />
      </label>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
