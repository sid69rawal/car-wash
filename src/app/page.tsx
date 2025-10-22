import {
  Header,
  Footer,
  HeroSection,
  ServicesSection,
  AboutSection,
  ReviewsSection,
  ContactSection
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}