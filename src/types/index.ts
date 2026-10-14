export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  category: 'Full-Stack' | 'Web Apps' | 'AI & ML' | 'AI & Tools';
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: { name: string; level?: string; iconKey?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Independent Work';
  description: string;
  achievements: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  result: string;
  location: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  verificationUrl?: string;
  credentialId?: string;
  description: string;
}
