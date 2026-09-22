import { Project, EmailTemplate, SkillItem, ExperienceItem, AwardItem } from '../types';

export const personalInfo = {
  name: 'Ram Kumar',
  role: 'Web Specialist & Digital Web Production',
  eyebrow: "HELLO, I'M",
  location: 'Chennai, India',
  email: 'ramkumar19121996@gmail.com',
  phone: '6381178710',
  linkedin: 'linkedin.com/in/ram-kumar-86b096140',
  linkedinUrl: 'https://linkedin.com/in/ram-kumar-86b096140',
  githubUrl: 'https://github.com/ramkumar19121996',
  bio: 'I build responsive, accessible and brand-focused digital experiences for enterprise marketing teams.',
  aboutText: 'Web Specialist with 6+ years of experience supporting enterprise digital marketing programs through web content updates, landing pages, email development, CMS asset management, QA, and accessibility. I enjoy turning complex requirements into clean, accessible and high-performing digital experiences.',
  quote: 'Clean code, better experiences, happier users.',
  headlineHandwritten: 'Turning Ideas into Impact',
  tags: [
    'HTML Email',
    'Web Development',
    'CMS',
    'Accessibility',
    'Digital Production'
  ]
};

export const statsData = [
  {
    value: '6+',
    label: 'Years Experience',
    icon: 'calendar'
  },
  {
    value: '50+',
    label: 'Email Templates',
    icon: 'mail'
  },
  {
    value: '100+',
    label: 'Web Content Updates',
    icon: 'monitor'
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
    icon: 'trophy'
  }
];

export const skillsData: SkillItem[] = [
  { name: 'HTML5', iconType: 'html5', color: '#E34F26', category: 'core' },
  { name: 'CSS3', iconType: 'css3', color: '#1572B6', category: 'core' },
  { name: 'JavaScript', iconType: 'javascript', color: '#F7DF1E', category: 'core' },
  { name: 'PHP', iconType: 'php', color: '#777BB4', category: 'core' },
  { name: 'MySQL', iconType: 'mysql', color: '#4479A1', category: 'core' },
  { name: 'WordPress', iconType: 'wordpress', color: '#21759B', category: 'core' },
  { name: 'React JS', iconType: 'react', color: '#61DAFB', category: 'framework' },
  { name: 'Git', iconType: 'git', color: '#F05032', category: 'tools' },
  { name: 'VMZ', iconType: 'vmz', color: '#0F172A', category: 'email' },
  { name: 'Litmus', iconType: 'litmus', color: '#F25C54', category: 'email' },
  { name: 'Email on Acid', iconType: 'emailonacid', color: '#6BBF43', category: 'email' },
  { name: 'Figma', iconType: 'figma', color: '#F24E1E', category: 'tools' }
];

export const websiteProjects: Project[] = [
  {
    id: 'portfolio-website',
    number: '1',
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'Personal portfolio with modern design and animations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ramkumar19121996/portfolio',
    mockupType: 'portfolio'
  },
  {
    id: 'business-landing-page',
    number: '2',
    title: 'Business Landing Page',
    category: 'Landing Page',
    description: 'Responsive landing page for a product with modern UI.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ramkumar19121996/business-landing',
    mockupType: 'landing'
  },
  {
    id: 'wordpress-website',
    number: '3',
    title: 'WordPress Website',
    category: 'CMS & Theme',
    description: 'Custom WordPress theme development.',
    tags: ['WordPress', 'PHP', 'Custom Gutenberg', 'ACF'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ramkumar19121996/wordpress-theme',
    mockupType: 'wordpress'
  },
  {
    id: 'web-application',
    number: '4',
    title: 'Web Application',
    category: 'Full Stack',
    description: 'Dynamic web application with PHP & MySQL.',
    tags: ['PHP', 'MySQL', 'REST API', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ramkumar19121996/php-mysql-app',
    mockupType: 'webapp'
  },
  {
    id: 'country-explorer',
    number: '5',
    title: 'Country Explorer',
    category: 'API Integration',
    description: 'REST Countries API project with search and filters.',
    tags: ['JavaScript', 'REST API', 'Search & Filter', 'CSS Grid'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ramkumar19121996/country-explorer',
    mockupType: 'countries'
  }
];

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'template-01',
    number: '1',
    title: 'Financial Services',
    category: 'Financial',
    description: 'Institutional wealth management advisory and quarterly account overview with responsive data columns.',
    client: 'Voya Financial',
    bannerColor: '#00587C',
    accentColor: '#F37021',
    previewType: 'financial',
    subjectLine: 'Important Update: Your Financial Advisory & Quarterly Summary'
  },
  {
    id: 'template-02',
    number: '2',
    title: 'Retirement Planning',
    category: 'Planning',
    description: 'Comprehensive retirement readiness roadmap with personalized contribution milestones.',
    client: 'Voya Financial',
    bannerColor: '#007096',
    accentColor: '#F37021',
    previewType: 'retirement',
    subjectLine: 'Are you on track? Discover your personal retirement savings path'
  },
  {
    id: 'template-03',
    number: '3',
    title: 'Investment Update',
    category: 'Investment',
    description: 'Quarterly market pulse and diversified portfolio rebalancing insights for private clients.',
    client: 'Voya Financial',
    bannerColor: '#1E293B',
    accentColor: '#F37021',
    previewType: 'investment',
    subjectLine: 'Q3 Market Insights: Capital Growth & Rebalancing Update'
  },
  {
    id: 'template-04',
    number: '4',
    title: 'Wellness Campaign',
    category: 'Wellness',
    description: 'Employee financial well-being initiative encouraging smart healthcare savings habits.',
    client: 'Voya Financial',
    bannerColor: '#2D6A4F',
    accentColor: '#52B788',
    previewType: 'wellness',
    subjectLine: 'Invest in your health & wealth with new wellness perks'
  },
  {
    id: 'template-05',
    number: '5',
    title: 'Event Invitation',
    category: 'Corporate',
    description: 'Exclusive executive webinar invitation with calendar RSVP integration and speaker roster.',
    client: 'Voya Financial',
    bannerColor: '#0F172A',
    accentColor: '#38BDF8',
    previewType: 'event',
    subjectLine: 'Invitation: 2026 Leadership Summit - Register Today'
  },
  {
    id: 'template-06',
    number: '6',
    title: 'Product Announcement',
    category: 'Marketing',
    description: 'Feature launch email highlighting streamlined mobile account management capabilities.',
    client: 'Voya Financial',
    bannerColor: '#0B2545',
    accentColor: '#F37021',
    previewType: 'product',
    subjectLine: 'Introducing the New Enhanced Digital Experience'
  },
  {
    id: 'template-07',
    number: '7',
    title: 'Newsletter',
    category: 'Corporate',
    description: 'Monthly curated digital newsletter featuring expert columns, regulatory news, and client spotlight.',
    client: 'Voya Financial',
    bannerColor: '#4A3B32',
    accentColor: '#E07A5F',
    previewType: 'newsletter',
    subjectLine: 'The Monthly Digest: Strategic Perspectives for Enterprise Leaders'
  },
  {
    id: 'template-08',
    number: '8',
    title: 'Promotional Offer',
    category: 'Marketing',
    description: 'Targeted promotion with limited-time fee waivers and interactive benefit comparison table.',
    client: 'Voya Financial',
    bannerColor: '#0052CC',
    accentColor: '#FFAB00',
    previewType: 'promo',
    subjectLine: 'Exclusive limited-time advisory offer for your team'
  },
  {
    id: 'template-09',
    number: '9',
    title: 'Year End Campaign',
    category: 'Seasonal',
    description: 'Strategic tax-loss harvesting and annual tax planning checklist for individual investors.',
    client: 'Voya Financial',
    bannerColor: '#1A365D',
    accentColor: '#F37021',
    previewType: 'yearend',
    subjectLine: 'Year-End Financial Checklist: Maximize deductions before Dec 31'
  },
  {
    id: 'template-10',
    number: '10',
    title: 'Holiday Greeting',
    category: 'Seasonal',
    description: 'Elegant festive celebration email with warm wishes, holiday schedule, and appreciation message.',
    client: 'Voya Financial',
    bannerColor: '#0A192F',
    accentColor: '#FBBF24',
    previewType: 'holiday',
    subjectLine: 'Warm holiday greetings and best wishes for the New Year'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Web Specialist',
    company: 'RR Donnelley',
    period: 'Feb 2020 – Current',
    location: 'Chennai, India',
    description: 'Working on enterprise clients like Voya and Goodwin. Developing email templates, web content, CMS asset management, QA, and managing digital assets.',
    isCurrent: true
  },
  {
    role: 'Software Engineer',
    company: 'iGlowSoft',
    period: 'Oct 2018 – Jan 2020',
    location: 'Chennai, India',
    description: 'Developed WordPress websites, custom plugins, and web applications. Worked on DhobiChacha web app and automation scripts.',
    isCurrent: false
  }
];

export const awardsData: AwardItem[] = [
  {
    title: 'Technical Excellence Award',
    description: 'Recognized for VMZ expertise and technical troubleshooting.',
    iconType: 'trophy',
    color: '#F59E0B'
  },
  {
    title: 'Rising Star of the Quarter',
    description: 'For client-focused delivery and team contribution.',
    iconType: 'star',
    color: '#EC4899'
  },
  {
    title: 'Bright Spark Award',
    description: 'For dedication and commitment to team success.',
    iconType: 'sparkle',
    color: '#3B82F6'
  }
];
