import Image from "next/image";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import type { AboutContent, SiteProfile } from "@/types/portfolio";
import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  about: AboutContent;
  site: SiteProfile;
};

export function About({ about, site }: AboutProps) {
  return (
    <section className="section section--muted" id="about">
      <div className="section-shell about-grid">
        <div className="about-media gsap-reveal">
          <Image
            src={site.avatarUrl}
            alt={site.name}
            width={520}
            height={620}
            sizes="(max-width: 900px) 92vw, 36vw"
          />
        </div>

        <div className="about-copy gsap-reveal">
          <SectionHeading eyebrow="About" title={about.title} />

          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className="highlight-list" aria-label="Profile highlights">
            {about.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 size={18} aria-hidden />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="contact-strip">
            <a href={`mailto:${site.email}`}>
              <Mail size={18} aria-hidden />
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={18} aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
