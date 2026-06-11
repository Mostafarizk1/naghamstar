import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyNameSection from '@/components/sections/WhyNameSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';

export const metadata = {
  title: 'من نحن | نغم ستار العقارية',
  description: 'تعرف على نغم ستار العقارية — رؤيتنا، خدماتنا، وقيمنا',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <AboutSection />
        <ServicesSection />
        <WhyNameSection />
        <VisionMissionSection />
      </main>
      <Footer />
    </>
  );
}
