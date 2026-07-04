import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import type { ExperienceItem } from "@/types/portfolio";
import { SectionHeading } from "./SectionHeading";

type ExperienceProps = {
  experience: ExperienceItem[];
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section" id="experience">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Product-minded full-stack practice"
          description="Current experience is organized around project delivery, reusable UI, authentication-aware flows, and dashboard-style applications."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item gsap-reveal" key={item.id}>
              <div className="timeline-item__icon">
                <BriefcaseBusiness size={20} aria-hidden />
              </div>
              <div>
                <p className="timeline-item__period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-item__org">{item.organization}</p>
                <p>{item.summary}</p>
                {item.liveUrl ? (
                  <a
                    className="timeline-item__link"
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} aria-hidden />
                    {item.liveLabel ?? "Live Project"}
                  </a>
                ) : null}
                <ul>
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
