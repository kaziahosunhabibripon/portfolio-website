import type { ReactNode } from "react";
import {
  Code2,
  ExternalLink,
  MessageCircle,
  Send,
  UserRound,
} from "lucide-react";
import type { ContactContent, SiteProfile } from "@/types/portfolio";

type FooterProps = {
  site: SiteProfile;
  contact: ContactContent;
};

const footerSocialIcons: Record<string, ReactNode> = {
  GitHub: <Code2 size={18} aria-hidden />,
  LinkedIn: <UserRound size={18} aria-hidden />,
  WhatsApp: <MessageCircle size={18} aria-hidden />,
  Twitter: <Send size={18} aria-hidden />,
  Facebook: <UserRound size={18} aria-hidden />,
};

export function Footer({ site, contact }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <p>
          Designed and built by <strong>{site.shortName}</strong>.
        </p>
        <p>All rights reserved {new Date().getFullYear()}.</p>
        <nav aria-label="Footer social links">
          {contact.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              {footerSocialIcons[social.label] ?? (
                <ExternalLink size={18} aria-hidden />
              )}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
