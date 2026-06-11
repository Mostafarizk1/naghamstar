import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
