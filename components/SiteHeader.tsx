import Link from "next/link";
import { Download, Menu } from "lucide-react";
import type { NavItem } from "@/types/portfolio";

type SiteHeaderProps = {
  name: string;
  resumeUrl: string;
  navigation: NavItem[];
};

export function SiteHeader({
  name,
  resumeUrl,
  navigation,
}: SiteHeaderProps) {
  const navLinks = navigation.map((item) => (
    <a key={item.href} href={item.href}>
      {item.label}
    </a>
  ));

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label={`${name} home`}>
          <span>{name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks}
        </nav>

        <a className="resume-link desktop-resume" href={resumeUrl} download>
          <Download size={16} aria-hidden />
          Resume
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={22} aria-hidden />
          </summary>
          <nav aria-label="Mobile navigation">
            {navLinks}
            <a className="resume-link" href={resumeUrl} download>
              <Download size={16} aria-hidden />
              Resume
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
