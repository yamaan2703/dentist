import type {
  ContactInfoItem,
  FaqItem,
  NavItem,
  ServiceItem,
  TestimonialItem,
} from '@/types/landing';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const aboutDescription: string[] = [
  'We are committed to delivering high-quality dental care in a comfortable and friendly environment. Our clinic combines modern technology with a personalized approach to ensure every patient receives the best treatment possible.',
  'From routine checkups to advanced procedures, we focus on creating healthy, confident smiles that last a lifetime. Your comfort, safety, and satisfaction are always our top priorities.',
];

export const services: ServiceItem[] = [
  {
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, and preventive care. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    title: 'Orthodontics',
    description: 'Braces and aligners for perfectly aligned teeth. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    title: 'Root Canal Treatment',
    description: 'Pain-free solutions to save damaged teeth. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    title: 'Emergency Care',
    description: 'Quick and reliable care when you need it most. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care specially designed for children. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    title: 'Dental Surgery',
    description: 'Safe and advanced surgical procedures by specialists. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
];

export const whyChooseUsItems: string[] = [
  'Experienced and certified dentists',
  'Advanced dental technology',
  'Comfortable and hygienic environment',
  'Personalized treatment plans',
  'Affordable and transparent pricing',
  'Friendly and supportive staff',
];

export const teamDescription =
  'Our team of highly qualified dentists and specialists is dedicated to providing exceptional care. With years of experience and a passion for excellence, we ensure every patient receives personalized attention and the best possible treatment.';

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'I had an amazing experience! The staff was very friendly and the treatment was completely painless.',
    rating: 5,
  },
  {
    quote:
      'Highly professional team and very clean environment. I finally feel confident about my smile!',
    rating: 5,
  },
  {
    quote:
      'Quick service and great care. I would definitely recommend this clinic to everyone.',
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'How often should I visit the dentist?',
    answer:
      'It is recommended to visit every 6 months for regular checkups and cleaning.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Yes, professional teeth whitening is completely safe and effective.',
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Yes, we provide immediate care for dental emergencies.',
  },
  {
    question: 'Are dental treatments painful?',
    answer:
      'We use modern techniques to ensure treatments are as comfortable and pain-free as possible.',
  },
];

export const contactInfo: ContactInfoItem[] = [
  { label: 'Address', value: 'Your Clinic Address Here' },
  { label: 'Phone', value: '+92 XXX XXX XXXX' },
  { label: 'Email', value: 'info@yourclinic.com' },
  { label: 'Working Hours', value: 'Mon - Sat (9:00 AM - 8:00 PM)' },
];
