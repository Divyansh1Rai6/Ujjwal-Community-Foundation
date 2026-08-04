import {
  Home,
  Info,
  Target,
  Sparkles,
  Images,
  CalendarDays,
  HandHeart,
  HeartHandshake,
  Phone,
  type LucideIcon,
} from 'lucide-react';

export const SITE = {
  name: 'Ujjwal Community Foundation',
  shortName: 'Ujjwal',
  tagline: 'Lighting Lives, Building Communities',
  description:
    'Ujjwal Community Foundation is a Jaipur-based NGO dedicated to child education, women empowerment, healthcare access, and environmental sustainability across rural Rajasthan.',
  foundedYear: 2014,
  email: 'contact@ujjwalcommunity.org',
  phone: '+91 9876543210',
  phoneHref: '+919876543210',
  address: {
    line1: '214, Lotus Business Park',
    line2: 'MG Road, Sector 12',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    full: '214, Lotus Business Park, MG Road, Sector 12, Jaipur, Rajasthan 302001',
  },
  mapEmbedSrc:
    'https://www.google.com/maps?q=MG+Road,+Sector+12,+Jaipur,+Rajasthan+302001&output=embed',
  mapLink: 'https://www.google.com/maps?q=MG+Road,+Sector+12,+Jaipur,+Rajasthan+302001',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
  ogImage: '/og-image.jpg',
} as const;

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About Us', href: '/about', icon: Info },
  { label: 'Mission & Vision', href: '/mission-vision', icon: Target },
  { label: 'Programs', href: '/programs', icon: Sparkles },
  { label: 'Gallery', href: '/gallery', icon: Images },
  { label: 'Events', href: '/events', icon: CalendarDays },
  { label: 'Volunteer', href: '/volunteer', icon: HandHeart },
  { label: 'Contact', href: '/contact', icon: Phone },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  iconName: string;
};

export const STATS: Stat[] = [
  { value: 12500, suffix: '+', label: 'Lives Impacted', iconName: 'HandHeart' },
  { value: 320, suffix: '+', label: 'Villages Reached', iconName: 'Target' },
  { value: 850, suffix: '+', label: 'Active Volunteers', iconName: 'Sparkles' },
  { value: 120, suffix: '+', label: 'Programs Completed', iconName: 'CalendarDays' },
];

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
  color: 'green' | 'blue';
};

export const PROGRAMS: Program[] = [
  {
    slug: 'shiksha',
    title: 'Shiksha — Education for All',
    tagline: 'Lighting young minds with knowledge',
    description:
      'We run learning centers in underserved villages, providing free tuition, books, and digital literacy to children who would otherwise be left behind.',
    image:
      '/images/shiksa.jpeg',
    icon: Sparkles,
    highlights: [
      '38 active learning centers',
      'Free books & study materials',
      'Digital literacy labs',
      'Scholarships for bright students',
    ],
    color: 'blue',
  },
  {
    slug: 'aarogya',
    title: 'Aarogya — Health Camps',
    tagline: 'Bringing healthcare to doorsteps',
    description:
      'Monthly medical camps in rural areas offer free check-ups, screenings, and medicines, while our maternal-health program supports expectant mothers.',
    image:
      'https://images.pexels.com/photos/7475697/pexels-photo-7475697.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: HeartHandshake,
    highlights: [
      'Monthly rural health camps',
      'Free medicines & diagnostics',
      'Maternal & child care support',
      'Mobile health van network',
    ],
    color: 'green',
  },
  {
    slug: 'shakti',
    title: 'Shakti — Women Empowerment',
    tagline: 'Unlocking potential, restoring dignity',
    description:
      'Vocational training, micro-finance literacy, and self-help groups equip women with the skills and confidence to build independent livelihoods.',
    image:
      'https://images.pexels.com/photos/15675900/pexels-photo-15675900.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Target,
    highlights: [
      '65 active self-help groups',
      'Tailoring & handicraft training',
      'Financial literacy workshops',
      'Micro-enterprise mentorship',
    ],
    color: 'green',
  },
  {
    slug: 'hara-bhara',
    title: 'Hara Bhara — Green Initiative',
    tagline: 'Restoring nature, one sapling at a time',
    description:
      'Tree plantation drives, waste management workshops, and water conservation projects build climate resilience in villages across Rajasthan.',
    image:
      'https://images.pexels.com/photos/12117345/pexels-photo-12117345.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Sparkles,
    highlights: [
      '25,000+ trees planted',
      'Community waste management',
      'Rainwater harvesting systems',
      'Eco-awareness in schools',
    ],
    color: 'blue',
  },
  {
    slug: 'annadata',
    title: 'Annadata — Food Security',
    tagline: 'No one should sleep hungry',
    description:
      'Community kitchens and ration distribution ensure nutritious meals reach elderly, homeless, and low-income families during crises and everyday life.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3oY5lsDa5z2ZtZN70llUXPP-S3YEGR78Vk2dCzdUKqg&s=10',
    icon: HandHeart,
    highlights: [
      'Daily community kitchen',
      'Ration kits for 600 families',
      'Emergency disaster relief',
      'Mid-day meal partnerships',
    ],
    color: 'green',
  },
  {
    slug: 'unnati',
    title: 'Unnati — Youth Skilling',
    tagline: 'Building tomorrow’s workforce',
    description:
      'Job-oriented skill training in trades like electrician work, tailoring, and basic IT connects rural youth to dignified employment opportunities.',
    image:
      'https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Target,
    highlights: [
      '11 vocational centers',
      'Job placement assistance',
      'Entrepreneurship guidance',
      'Industry-aligned curriculum',
    ],
    color: 'blue',
  },
];

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  description: string;
  status: 'upcoming' | 'past';
};

export const EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Annual Monsoon Plantation Drive',
    date: '2026-08-15',
    time: '7:30 AM – 12:00 PM',
    location: 'Ramnagar Forest Belt, Jaipur',
    category: 'Environment',
    image:
      'https://images.pexels.com/photos/4894659/pexels-photo-4894659.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Join 500+ volunteers to plant 5,000 native saplings and help restore the green cover around Jaipur. Breakfast, tools, and saplings provided.',
    status: 'upcoming',
  },
  {
    id: 'evt-2',
    title: 'Free Health & Eye Check-up Camp',
    date: '2026-09-08',
    time: '9:00 AM – 2:00 PM',
    location: 'Govindpura Community Center',
    category: 'Healthcare',
    image:
      'https://images.pexels.com/photos/7469274/pexels-photo-7469274.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A full-day camp offering general consultations, eye screenings, free spectacles, and BP/sugar tests for over 600 rural residents.',
    status: 'upcoming',
  },
  {
    id: 'evt-3',
    title: 'Shakti Women’s Self-Help Mela',
    date: '2026-10-02',
    time: '10:00 AM – 6:00 PM',
    location: 'Central Park, Jaipur',
    category: 'Empowerment',
    image:
      'https://images.pexels.com/photos/20356768/pexels-photo-20356768.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A day-long exhibition-cum-sale of handicrafts, textiles, and organic produce by women from our 65 self-help groups. Live demos and cultural performances.',
    status: 'upcoming',
  },
  {
    id: 'evt-4',
    title: 'Joy of Giving — Festive Ration Drive',
    date: '2025-11-05',
    time: '10:00 AM – 4:00 PM',
    location: '12 Slum Clusters, Jaipur',
    category: 'Food Security',
    image:
      'https://images.pexels.com/photos/7156158/pexels-photo-7156158.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'During the festive season, our volunteers distributed 1,200 ration kits and warm clothes to families across 12 settlements in Jaipur.',
    status: 'past',
  },
  {
    id: 'evt-5',
    title: 'Shiksha Digital Literacy Bootcamp',
    date: '2025-12-14',
    time: '9:30 AM – 3:00 PM',
    location: 'Lotus Business Park, Jaipur',
    category: 'Education',
    image:
      'https://images.pexels.com/photos/18506736/pexels-photo-18506736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A weekend bootcamp introducing 180 rural students to computers, internet safety, and basic coding through hands-on sessions.',
    status: 'past',
  },
  {
    id: 'evt-6',
    title: 'Hara Bhara School Workshop Series',
    date: '2026-01-20',
    time: '11:00 AM – 1:00 PM',
    location: '20 Govt. Schools, Jaipur',
    category: 'Environment',
    image:
      'https://images.pexels.com/photos/15809998/pexels-photo-15809998.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Interactive workshops on waste segregation, composting, and water conservation conducted in 20 government schools.',
    status: 'past',
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

export const GALLERY: GalleryItem[] = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3JfFwN2B7-mQOOz3xZ17_k1GgPqF1kI9aO3xNjdMMQ&s=10',
    alt: 'Volunteers sorting aid boxes',
    category: 'Volunteering',
  },
  {
    src: 'http://localhost:3001/images/shiksa.jpeg',
    alt: 'Children learning in a classroom',
    category: 'Education',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3oY5lsDa5z2ZtZN70llUXPP-S3YEGR78Vk2dCzdUKqg&s=10',
    alt: 'Food distribution drive',
    category: 'Food Security',
  },
  {
    src: 'https://images.pexels.com/photos/12117345/pexels-photo-12117345.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hands holding a seedling',
    category: 'Environment',
  },
  {
    src: 'https://images.pexels.com/photos/15675900/pexels-photo-15675900.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Group of women in traditional clothing',
    category: 'Empowerment',
  },
  {
    src: 'https://images.pexels.com/photos/7469274/pexels-photo-7469274.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Health check-up at a camp',
    category: 'Healthcare',
  },
  {
    src: 'https://images.pexels.com/photos/5909876/pexels-photo-5909876.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Elderly woman serving food to children',
    category: 'Food Security',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2R9XUANNEsugCjgXSAWDY50NEu44PtvgROrNX7RRig&s=10',
    alt: 'Teacher with attentive students',
    category: 'Education',
  },
  {
    src: 'https://images.pexels.com/photos/4894659/pexels-photo-4894659.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Gloved hand touching green leaves',
    category: 'Environment',
  },
  {
    src: 'https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Volunteer in community service shirt',
    category: 'Volunteering',
  },
  {
    src: 'https://images.pexels.com/photos/7156158/pexels-photo-7156158.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Volunteer packing donation boxes',
    category: 'Food Security',
  },
  {
    src: 'https://images.pexels.com/photos/14536291/pexels-photo-14536291.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Teacher guiding young students',
    category: 'Education',
  },
];

export const GALLERY_CATEGORIES = [
  'All',
  'Education',
  'Healthcare',
  'Empowerment',
  'Environment',
  'Food Security',
  'Volunteering',
] as const;

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Meera Sharma',
    role: 'Shakti Self-Help Group Member',
    quote:
      'Before joining Ujjwal’s tailoring training, I had never stepped out alone. Today I run my own small business and send my daughter to school. They gave me more than skills — they gave me confidence.',
    avatar: 'https://images.pexels.com/photos/20356768/pexels-photo-20356768.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Volunteer, 3 Years',
    quote:
      'I came looking for a way to give back and found a family. The health camps are run with real professionalism and genuine care for every single person who walks in.',
    avatar: 'https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sunita Devi',
    role: 'Parent, Shiksha Learning Center',
    quote:
      'My son struggled in school and we couldn’t afford tuition. The learning center teachers patiently brought him up to grade level. He now dreams of becoming an engineer.',
    avatar: 'https://images.pexels.com/photos/5909876/pexels-photo-5909876.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Dr. Anil Mehta',
    role: 'Partner Physician, Aarogya Camps',
    quote:
      'I have volunteered with many organizations. Ujjwal’s logistics, follow-up care, and community trust are exceptional. They make real healthcare access possible where it’s needed most.',
    avatar: 'https://images.pexels.com/photos/7469274/pexels-photo-7469274.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export const VALUES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Compassion First',
    description:
      'Every decision begins with empathy. We listen to communities and design solutions around their real needs.',
    icon: HeartHandshake,
  },
  {
    title: 'Radical Transparency',
    description:
      'We publish our accounts and impact reports openly. Every rupee you trust us with is accounted for.',
    icon: Target,
  },
  {
    title: 'Sustainable Impact',
    description:
      'We don’t believe in quick fixes. Our programs build local capacity so communities thrive on their own.',
    icon: Sparkles,
  },
  {
    title: 'Community Ownership',
    description:
      'Change lasts when people own it. We train local leaders to carry every initiative forward.',
    icon: HandHeart,
  },
];

export const WHY_CHOOSE_US: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: '12+ Years of Trusted Service',
    description:
      'Since 2014, we have served over 320 villages across Rajasthan with consistent, measurable impact.',
    icon: CalendarDays,
  },
  {
    title: 'Verified & Accountable',
    description:
      'Registered non-profit with 80G & 12A certification. Annual audits and public impact reports.',
    icon: Target,
  },
  {
    title: 'Community-Led Approach',
    description:
      'Every program is co-created with the communities we serve, ensuring relevance and long-term ownership.',
    icon: HandHeart,
  },
  {
    title: '85% Funds to the Field',
    description:
      'We keep overheads lean. The majority of every donation reaches programs and beneficiaries directly.',
    icon: HeartHandshake,
  },
];

export const TEAM: { name: string; role: string; image: string }[] = [
  {
    name: 'Aarav Singh Rathore',
    role: 'Founder & President',
    image:
      'https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. Priya Agarwal',
    role: 'Director, Programs',
    image:
      'https://images.pexels.com/photos/7469274/pexels-photo-7469274.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Vikram Meena',
    role: 'Head of Volunteering',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwM2z7vqc8gOkMeefphzGghg5DrmwIUt8PZdXxBM_CVw&s=10',
  },
  {
    name: 'Nisha Gupta',
    role: 'Community Outreach Lead',
    image:
      'https://images.pexels.com/photos/15675900/pexels-photo-15675900.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const HERO_IMAGE =
  '/images/hero/hero-image.png';
export const ABOUT_PREVIEW_IMAGE =
  '/images/about-image.png';
export const ABOUT_HERO_IMAGE =
  'https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1200';
