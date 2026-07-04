"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Download,
  ExternalLink,
  Mail,
  MessageCircle,
  MapPin,
  UserRound,
} from "lucide-react";
import type { ContactContent, HeroContent, SiteProfile } from "@/types/portfolio";
import { HeroScene } from "./HeroScene";

type HeroProps = {
  site: SiteProfile;
  hero: HeroContent;
  contact: ContactContent;
};

const socialIcons: Record<string, ReactNode> = {
  GitHub: <Code2 size={18} aria-hidden />,
  LinkedIn: <UserRound size={18} aria-hidden />,
  WhatsApp: <MessageCircle size={18} aria-hidden />,
};

export function Hero({ site, hero, contact }: HeroProps) {
  return (
    <motion.section
      className="hero section-shell"
      id="home"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <HeroScene className="hero-three-scene" />
      <motion.div
        className="hero__content"
        variants={{
          hidden: { opacity: 0, y: 28 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <motion.p className="eyebrow" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          className="hero__headline"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {hero.headline}
        </motion.p>
        <motion.p
          className="hero__intro"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {hero.introduction}
        </motion.p>

        <div className="role-list" aria-label="Professional roles">
          {hero.roles.map((role) => (
            <motion.span
              key={role}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -3 }}
            >
              {role}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="hero__actions"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.a
            className="button button--secondary"
            href={site.resumeUrl}
            download
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} aria-hidden />
            Download Resume
          </motion.a>
          <motion.a
            className="button button--ghost"
            href={`mailto:${site.email}`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} aria-hidden />
            Email
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__socials"
          aria-label="Social profiles"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {contact.socials.slice(0, 3).map((social) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${social.label}: ${social.handle}`}
              whileHover={{ x: 3 }}
            >
              {socialIcons[social.label] ?? <ExternalLink size={18} aria-hidden />}
              <span>{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__visual"
        aria-label={`${site.name} portfolio visual`}
        variants={{
          hidden: { opacity: 0, scale: 0.96, y: 24 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        whileHover={{ y: -6, rotate: 0.4 }}
      >
        <Image
          src={site.heroImageUrl}
          alt="Developer working with web technologies"
          width={640}
          height={560}
          priority
          sizes="(max-width: 900px) 90vw, 42vw"
        />
        <div className="hero__location">
          <MapPin size={18} aria-hidden />
          <span>{site.location}</span>
        </div>
      </motion.div>

      <dl className="hero__stats" aria-label="Portfolio summary">
        {hero.stats.map((stat) => (
          <motion.div
            key={`${stat.value}-${stat.label}`}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -4 }}
          >
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </motion.div>
        ))}
      </dl>
    </motion.section>
  );
}
