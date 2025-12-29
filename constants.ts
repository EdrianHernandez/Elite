
import { Project, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Quantum Dashboard',
    description: 'A high-performance analytics platform with real-time data visualization and machine learning insights.',
    image: 'https://picsum.photos/seed/dash/800/600',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    link: '#',
    category: 'SaaS'
  },
  {
    id: '2',
    title: 'Nebula E-Commerce',
    description: 'Modern headless commerce solution with ultra-fast page transitions and personalized shopping experiences.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['Next.js', 'Stripe', 'GraphQL', 'Tailwind'],
    link: '#',
    category: 'E-commerce'
  },
  {
    id: '3',
    title: 'Aura Social',
    description: 'A privacy-focused social networking application with encrypted messaging and decentralized storage.',
    image: 'https://picsum.photos/seed/social/800/600',
    tags: ['React Native', 'Firebase', 'WebRTC'],
    link: '#',
    category: 'Social'
  },
  {
    id: '4',
    title: 'Zenit Workspace',
    description: 'Collaborative task management tool with offline support and intuitive drag-and-drop interfaces.',
    image: 'https://picsum.photos/seed/work/800/600',
    tags: ['React', 'Redux', 'IndexedDB'],
    link: '#',
    category: 'Productivity'
  },
  {
    id: '5',
    title: 'Lumina VR',
    description: 'Web-based virtual reality showroom for architectural visualizations and interactive 3D tours.',
    image: 'https://picsum.photos/seed/vr/800/600',
    tags: ['Three.js', 'React Three Fiber', 'GLSL'],
    link: '#',
    category: 'Visualization'
  },
  {
    id: '6',
    title: 'Atlas API Hub',
    description: 'Unified gateway for managing microservices with automated documentation and rate limiting.',
    image: 'https://picsum.photos/seed/api/800/600',
    tags: ['Node.js', 'Express', 'Redis', 'Swagger'],
    link: '#',
    category: 'Infrastructure'
  },
];
