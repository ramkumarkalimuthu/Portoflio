import { Project, EmailTemplate, SkillItem, ExperienceItem, AwardItem } from '../types';
import localStoragePreview from '../images/local-storage-script-preview.png';
import financewebpagepreview from '../images/finance-webpage-preview.png';
import mensshoppreview from '../images/mensshop-preview.png';
import sunnysidepreview from '../images/sunnyside-preview.png';
import loopstudiospreview from '../images/loopstudios-preview.png';
import afresherpreview from '../images/afresher-preview.png';
export const personalInfo = {
  name: 'Ram Kumar',
  role: 'Web Specialist & Digital Web Production',
  eyebrow: "HELLO, I'M",
  location: 'Chennai, India',
  email: 'ramkumar19121996@gmail.com',
  phone: '6381178710',
  linkedin: 'linkedin.com/in/ram-kumar-86b096140',
  linkedinUrl: 'https://linkedin.com/in/ram-kumar-86b096140',
  githubUrl: 'https://github.com/ramkumarkalimuthu',
  bio: 'I build responsive, accessible and brand-focused digital experiences for enterprise marketing teams.',
  aboutText: 'Web Specialist with 6+ years of experience supporting enterprise digital marketing programs through web content updates, landing pages, email development, CMS asset management, QA, and accessibility. I enjoy turning complex requirements into clean, accessible and high-performing digital experiences.',
  quote: 'Clean code, better experiences, happier users.',
  headlineHandwritten: 'Turning Ideas into Impact',
  tags: [
    'Email Campaigns Development',
    'Web Development',
    'CMS',       
    
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
    id: 'Local Storage Script',
    number: '1',
    title: 'Local Storage Script',
    category: 'Frontend',
    description: 'A browser-based developer utility for inspecting and managing client-side local storage. Built with HTML, CSS, and JavaScript, featuring CRUD operations, search/filtering, JSON handling, clipboard utilities, and responsive dark/light themes.',
    tags: ['JavaScript', 'LocalStorage API', 'HTML5', 'CSS3'],
    liveUrl: 'https://localstoragescript.netlify.app',
    githubUrl: 'https://github.com/ramkumarkalimuthu/localstorage',
    mockupType: 'Local Storage Script',
    imageUrl: localStoragePreview
  },
  {
    id: 'Finance Webpage',
    number: '2',
    title: 'Finance Webpage',
    category: 'Frontend',
    description: 'A modern multi-page finance website featuring responsive layouts, professional UI design, structured navigation, and interactive elements for a seamless user experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript','Bootstrap4', 'Responsive'],
    liveUrl: 'https://financewebpage.netlify.app',
    githubUrl: 'https://github.com/ramkumarkalimuthu/finace_template',
    mockupType: 'Finance Webpage',
    imageUrl: financewebpagepreview
  },
  {
    id: 'Mens Shop',
    number: '3',
    title: "Men's Shop",
    category: 'Frontend',
    description: 'A modern multi-page mens fashion e-commerce website featuring product-focused layouts, category navigation, responsive design, and interactive UI elements for a smooth and engaging shopping experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript','Bootstrap4', 'E-commerce'],
    liveUrl: 'https://menshops.netlify.app',
    githubUrl: 'https://github.com/ramkumarkalimuthu/menshoptemplate',
    mockupType: 'Mens Shop',
    imageUrl: mensshoppreview
  },
  {
    id: 'Sunnyside',
    number: '4',
    title: 'Sunnyside',
    category: 'Frontend',
    description: 'A modern, visually engaging landing page for a creative digital agency, featuring a clean layout, bold typography, responsive sections, and carefully structured content to create a polished user experience across desktop and mobile devices.',
    tags: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://frontendprojectslist.netlify.app/sunnyside/',
    githubUrl: 'https://github.com/ramkumarkalimuthu/frontend-project/tree/main/sunnyside',
    mockupType: 'webapp',
    imageUrl: sunnysidepreview
  },
  {
    id: 'Loopstudios Landing Page',
    number: '5',
    title: 'Loopstudios Landing Page',
    category: 'Frontend',
    description: 'A modern VR-focused landing page showcasing immersive digital experiences through bold typography, responsive layouts, interactive navigation, and a visually engaging creations gallery. The design emphasizes strong visual hierarchy and a seamless experience across desktop and mobile devices.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://frontendprojectslist.netlify.app/loopstudios/',
    githubUrl: 'https://github.com/ramkumarkalimuthu/frontend-project/tree/main/loopstudios',
    mockupType: 'countries',
    imageUrl: loopstudiospreview
  }
];

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'template-01',
    number: '1',
    title: 'A Fresher — Email Template',
    category: 'Email Template',
    description: 'A professionally designed responsive HTML email template created for a fresher-focused campaign, featuring a clean visual hierarchy, structured content sections, prominent call-to-action elements, and email-client-friendly layouts.',       
    liveUrl: 'https://templateemails.netlify.app/a-fresher-website/',
    imageUrl: afresherpreview,
    githubUrl: 'https://github.com/ramkumarkalimuthu/frontend-project/tree/main/loopstudios'
  },
  
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
