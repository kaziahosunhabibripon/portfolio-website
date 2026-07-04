import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionConfigProvider } from "@/components/MotionConfigProvider";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { getPortfolioData } from "@/lib/portfolio";

export default async function HomePage() {
  const portfolio = await getPortfolioData();

  return (
    <MotionConfigProvider>
      <ScrollAnimations />
      <SiteHeader
        name={portfolio.site.name}
        resumeUrl={portfolio.site.resumeUrl}
        navigation={portfolio.navigation}
      />
      <main>
        <Hero
          site={portfolio.site}
          hero={portfolio.hero}
          contact={portfolio.contact}
        />
        <About about={portfolio.about} site={portfolio.site} />
        <Skills skills={portfolio.skills} />
        <Experience experience={portfolio.experience} />
        <Education education={portfolio.education} />
        <Contact contact={portfolio.contact} />
      </main>
      <Footer site={portfolio.site} contact={portfolio.contact} />
    </MotionConfigProvider>
  );
}
