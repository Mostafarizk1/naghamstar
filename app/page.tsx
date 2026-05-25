import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyNameSection from '@/components/sections/WhyNameSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyNameSection />
        <VisionMissionSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
