export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  id: number;
  title: string;
  description: string;
  whatIsIt: string;
  benefits: string[];
}

export interface Semester {
  id: number;
  title: string;
  courses: string[];
}

export interface Specialization {
  id: number;
  title: string;
  description: string;
}

export interface Competency {
  id: number;
  title: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
  subtext?: string;
}
