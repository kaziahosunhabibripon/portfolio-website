export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type SiteProfile = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  siteUrl: string;
  logoUrl: string;
  avatarUrl: string;
  heroImageUrl: string;
  resumeUrl: string;
  keywords: string[];
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  introduction: string;
  roles: string[];
  stats: HeroStat[];
};

export type AboutContent = {
  title: string;
  paragraphs: string[];
  highlights: string[];
};

export type Skill = {
  id: string;
  name: string;
  category: string;
  image?: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  liveUrl?: string;
  liveLabel?: string;
  achievements: string[];
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  summary: string;
};

export type ContactContent = {
  heading: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
};

export type PortfolioData = {
  site: SiteProfile;
  navigation: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  skills: Skill[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: ContactContent;
};
