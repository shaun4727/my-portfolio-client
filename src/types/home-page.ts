export type THeroSection = {
  _id: string;
  stack: 'frontend' | 'backend' | 'full-stack';
  tagline: string;
  about_me: string;
  thumbnail: string;
};

export type TSkill = {
  _id: string;
  name: string;
  description: string;
  skill_icon: string;
};

export type TExperience = {
  _id: string;
  company_name: string;
  currently_working?: boolean;
  designation: string;
  end_date?: string;
  start_date: string;
  responsibilities: string[];
};

export type TBlog = {
  _id: string;
  content: string;
  excerpt: string;
  question: string;
};
