export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  mockupType: 'Local Storage Script' | 'Finance Webpage' | 'Mens Shop' | 'webapp' | 'countries';
  imageUrl?: string;
}

export interface EmailTemplate {
  id: string;
  number: string;
  title: string;
  category: 'Financial' | 'Planning' | 'Investment' | 'Wellness' | 'Corporate' | 'Marketing' | 'Seasonal' | 'Email Template';
  description: string;
  client: string;
  htmlCode?: string; 
  subjectLine: string;
  liveUrl?: string;
  imageUrl?: string;
  
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
