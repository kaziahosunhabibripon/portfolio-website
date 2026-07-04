import { GraduationCap } from "lucide-react";
import type { EducationItem } from "@/types/portfolio";
import { SectionHeading } from "./SectionHeading";

type EducationProps = {
  education: EducationItem[];
};

export function Education({ education }: EducationProps) {
  return (
    <section className="section section--compact section--muted" id="education">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Computer science background supporting practical software engineering and modern web development."
        />

        <div className="education-list">
          {education.map((item) => (
            <article className="education-item gsap-reveal" key={item.id}>
              <GraduationCap size={28} aria-hidden />
              <div>
                <p>{item.period}</p>
                <h3>{item.degree}</h3>
                <span>{item.institution}</span>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
