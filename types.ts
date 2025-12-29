
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
