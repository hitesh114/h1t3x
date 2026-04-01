export interface ImageMedia {
  type: 'image' | 'img';
  src: string;
  alt: string;
}

export interface IconMedia {
  type: 'icon';
  src: string;
  alt: string;
}

export type Media = ImageMedia | IconMedia;

export interface PersonalData {
  username: string;
  name: string;
  title: string;
  bio: string[];
  avatar: Media;
  stats: any[];
}

export interface ExperienceData {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface CertificationData {
  name: string;
  organization: string;
  dateObtained: string;
  expirationDate: string;
  badge: Media;
  certificationLink: string;
}

export interface ProjectData {
  title: string;
  description: string;
  image: Media;
  technologies: string[];
  links: {
    live: string;
    github: string;
  };
}

export interface SkillCategory {
  name: string;
  level: number;
}

export interface SkillsData {
  categoryTitle: string;
  technical: SkillCategory[];
  tags: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  display: string;
}

export interface ContactData {
  description: string;
  email: string;
  social: SocialLink[];
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface FooterData {
  copyright: string;
  links: NavigationLink[];
}

export interface PortfolioData {
  personal: PersonalData;
  experience: ExperienceData[];
  certifications: CertificationData[];
  terminalCommands: string[];
  projects: ProjectData[];
  skills: SkillsData;
  contact: ContactData;
  navigation: NavigationLink[];
  footer: FooterData;
}
