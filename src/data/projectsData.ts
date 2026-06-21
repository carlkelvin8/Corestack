export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
  features: string[];
}

export const projectsData: Project[] = [
  {
    slug: 'dropnfly',
    title: 'DropnFly',
    shortDescription: 'On-demand luggage pickup, storage, and delivery service. Schedule a pickup and we\'ll get your bags where they need to go.',
    fullDescription: 'On-demand luggage pickup, storage, and delivery service. Schedule a pickup and we\'ll get your bags where they need to go — so you can enjoy the journey hands-free.',
    category: 'Logistics / Travel Technology',
    image: '/project/Dropnfly.png',
    features: [
      'Luggage pickup scheduling',
      'Storage and delivery flow',
      'Travel-friendly user experience',
      'Service status tracking concept'
    ]
  },
  {
    slug: 'daccoffee',
    title: 'daccoffee',
    shortDescription: 'A responsive coffee shop website concept focused on simplicity, branding, and user experience.',
    fullDescription: 'A responsive coffee shop website concept focused on simplicity, branding, and user experience. The homepage showcases premium coffee products, clear navigation, and strategic call-to-action elements that help visitors explore the menu, learn about the brand, and connect with the business effortlessly.',
    category: 'Web Design / Branding',
    image: '/project/Daccoffee.png',
    features: [
      'Responsive landing page',
      'Product showcase',
      'Clear navigation',
      'Strong CTA placement',
      'Brand-focused layout'
    ]
  },
  {
    slug: 'steam-elms',
    title: 'STEAM ELMS',
    shortDescription: 'Immersive VR experiences bringing science, technology, engineering, arts, and mathematics to life.',
    fullDescription: 'Step inside your lessons. STEAM ELMS brings science, technology, engineering, arts, and mathematics to life through immersive VR experiences — learn by doing, not just watching.',
    category: 'VR Education / EdTech',
    image: '/project/Steam%20Elms.png',
    features: [
      'Immersive VR lessons',
      'STEAM-focused learning',
      'Interactive educational experience',
      'Learn-by-doing approach'
    ]
  },
  {
    slug: 'naap-lost-and-found',
    title: 'National Aviation Academy of the Philippines – Lost and Found Management System',
    shortDescription: 'A centralized digital solution for managing lost and found items to improve efficiency and transparency.',
    fullDescription: 'A centralized digital solution for managing lost and found items, featuring item reporting, tracking, claim processing, and administrative management to improve efficiency and transparency.',
    category: 'Management System / Aviation',
    image: '/project/National%20Academy%20of%20the%20Philippines.png',
    features: [
      'Item reporting',
      'Item tracking',
      'Claim processing',
      'Admin management',
      'Improved transparency'
    ]
  },
  {
    slug: 'healthcare-recruitment',
    title: 'Healthcare Recruitment Platform',
    shortDescription: 'Connect with qualified professionals, automate compliance, and fill shifts faster than ever.',
    fullDescription: 'Streamline your healthcare recruitment. Connect with qualified professionals, automate compliance, and fill shifts faster than ever.',
    category: 'Healthcare / Recruitment Automation',
    image: '/project/AI%20ClinForce%20Partners.png',
    features: [
      'Professional matching',
      'Compliance automation',
      'Shift filling workflow',
      'Healthcare staffing support'
    ]
  },
  {
    slug: 'acheivia',
    title: 'Acheivia',
    shortDescription: 'Subscription-based access to top-tier board exam preparation materials and expert reviewers.',
    fullDescription: 'Subscription-based access to top-tier board exam preparation materials, mnemonics, and expert reviewers.',
    category: 'SaaS / Board Exam Preparation',
    image: '/project/Achievia.png',
    features: [
      'Subscription-based access',
      'Board exam reviewers',
      'Mnemonics and study materials',
      'Premium learning resources'
    ]
  }
];
