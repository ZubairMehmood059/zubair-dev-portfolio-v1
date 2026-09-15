export interface SocialLink {
  name: string;
  url: string;
  label: string;
  iconName: 'Github' | 'Linkedin' | 'Mail' | 'FileText';
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ZubairMehmood059',
    label: 'Explore Zubair Mehmood repositories on GitHub',
    iconName: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zubair-mehmood-513470330',
    label: 'Connect with Zubair Mehmood on LinkedIn',
    iconName: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:itszayn1379@gmail.com',
    label: 'Send an email directly to Zubair Mehmood',
    iconName: 'Mail',
  },
];

export const siteConfig = {
  name: 'Zubair Mehmood',
  brand: 'Zubair.dev',
  role: 'Software Engineer',
  subRole: 'Full-Stack Developer & AI Product Engineer',
  email: 'itszayn1379@gmail.com',
  location: 'Karachi, Pakistan',
  status: 'Open for Engineering Opportunities',
  bio: 'Software Engineer specializing in building full-stack products, backend systems, and AI-powered experiences with clean architectures and disciplined design.',
};
