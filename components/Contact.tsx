import {
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import type { ContactContent } from "@/types/portfolio";
import { SectionHeading } from "./SectionHeading";

type ContactProps = {
  contact: ContactContent;
};

function getSocialIcon(label: string) {
  if (label === "GitHub") {
    return <Code2 size={16} aria-hidden />;
  }

  if (label === "LinkedIn") {
    return <UserRound size={16} aria-hidden />;
  }

  if (label === "WhatsApp") {
    return <MessageCircle size={16} aria-hidden />;
  }

  return <ExternalLink size={16} aria-hidden />;
}

export function Contact({ contact }: ContactProps) {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-shell contact-grid">
        <div className="gsap-reveal">
          <SectionHeading
            eyebrow="Contact"
            title={contact.heading}
            description={contact.description}
          />

          <div className="contact-methods">
            <a href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden />
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <Phone size={18} aria-hidden />
              {contact.phone}
            </a>
            <span>
              <MapPin size={18} aria-hidden />
              {contact.location}
            </span>
          </div>

          <div className="social-grid" aria-label="Social links">
            {contact.socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                <span>{social.label}</span>
                {getSocialIcon(social.label)}
              </a>
            ))}
          </div>
        </div>

        <form
          className="contact-form gsap-reveal"
          action={`mailto:${contact.email}`}
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Subject
            <input name="subject" type="text" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} required />
          </label>
          <button className="button button--primary" type="submit">
            <Send size={18} aria-hidden />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
