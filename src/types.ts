export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  mockupType: 'portfolio' | 'landing' | 'wordpress' | 'webapp' | 'countries';
}

export interface EmailTemplate {
  id: string;
  number: string;
  title: string;
  category: 'Financial' | 'Planning' | 'Investment' | 'Wellness' | 'Corporate' | 'Marketing' | 'Seasonal';
  description: string;
  client: string;
  bannerColor: string;
  accentColor: string;
  previewType: string;
  subjectLine: string;
}

export interface SkillItem {
  name: string;
  iconType: string;
  color: string;
  category: 'core' | 'framework' | 'tools' | 'email';
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  isCurrent?: boolean;
}

export interface AwardItem {
  title: string;
  description: string;
  iconType: 'trophy' | 'star' | 'sparkle';
  color: string;
}
