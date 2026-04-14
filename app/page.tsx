import {
  AboutSection,
  ContactSection,
  FaqSection,
  FooterSection,
  HeroSection,
  NavbarSection,
  ServicesSection,
  TeamSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white">
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
