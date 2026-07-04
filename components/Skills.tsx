"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Skill } from "@/types/portfolio";
import { SectionHeading } from "./SectionHeading";

type SkillsProps = {
  skills: Skill[];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="section" id="skills">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Core tools I use to build web products"
          description="A focused stack for modern frontend development, backend APIs, databases, and practical deployment workflows."
          align="center"
        />

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.article
              className="skill-card"
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-card__icon">
                {skill.image ? (
                  <Image
                    src={skill.image}
                    alt=""
                    width={72}
                    height={72}
                    sizes="72px"
                  />
                ) : (
                  <span aria-hidden>{skill.name.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
