export const phases = [
  {
    number: '01', title: 'Discovery',
    desc: 'Business requirements, objectives, technical needs, and project scope are identified.',
    items: ['Requirements Analysis', 'Business Assessment', 'Project Roadmap', 'Technical Recommendations'],
  },
  {
    number: '02', title: 'Planning',
    desc: 'The development team designs the overall architecture, workflows, database structure, and user experience.',
    items: ['Wireframes', 'Architecture Design', 'Technical Specifications', 'Development Timeline'],
  },
  {
    number: '03', title: 'Development',
    desc: 'The solution is developed according to approved requirements and technical standards.',
    items: ['Frontend Development', 'Backend Development', 'Database Development', 'API Integration', 'AI Integration', 'Quality Assurance'],
  },
  {
    number: '04', title: 'Testing',
    desc: 'The system undergoes extensive testing to ensure reliability and functionality.',
    items: ['Functional Testing', 'Security Testing', 'Performance Testing', 'Compatibility Testing', 'User Acceptance Testing'],
  },
  {
    number: '05', title: 'Deployment',
    desc: 'After successful validation, the solution is deployed to production environments.',
    items: ['Infrastructure Setup', 'Deployment Configuration', 'Monitoring Activation', 'Performance Optimization'],
  },
  {
    number: '06', title: 'Support & Maintenance',
    desc: 'Post-deployment services ensure continuous operation and improvement.',
    items: ['Bug Fixes', 'Security Updates', 'Feature Enhancements', 'Performance Monitoring', 'Technical Support'],
  },
];

export const techStack = [
  { category: 'Frontend', icon: 'web', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', icon: 'dns', items: ['Node.js', 'Express.js', 'NestJS'] },
  { category: 'Mobile', icon: 'smartphone', items: ['Flutter', 'React Native'] },
  { category: 'Database', icon: 'storage', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'Cloud', icon: 'cloud', items: ['Vercel', 'AWS', 'Google Cloud Platform'] },
  { category: 'AI', icon: 'smart_toy', items: ['OpenAI', 'Google Gemini', 'Anthropic Claude', 'Custom AI Integrations'] },
];

export const contactInfo = [
  { icon: 'apartment', label: 'Company', value: 'Corestack Technologies' },
  { icon: 'calendar_today', label: 'Founded', value: '2026' },
  { icon: 'language', label: 'Website', value: 'corestackph.tech' },
  { icon: 'mail', label: 'Email', value: 'corestacktechph@gmail.com' },
  { icon: 'location_on', label: 'Location', value: 'Philippines' },
];
