import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WorksSection from '@/components/sections/WorksSection';

export const metadata = {
  title: 'معرض الأعمال | نغم ستار العقارية',
  description: 'أعمالنا في المونتاج العقاري والإعلانات العقارية السريعة',
};

async function fetchPortfolio() {
  try {
    const res = await fetch('https://www.mostafarizkk.com/api/portfolio', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { realestate: [], realestateads: [] };
    const data = await res.json();
    return {
      realestate:    data.videos?.realestate    ?? [],
      realestateads: data.videos?.realestateads ?? [],
    };
  } catch {
    return { realestate: [], realestateads: [] };
  }
}

export default async function WorksPage() {
  const { realestate, realestateads } = await fetchPortfolio();

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <WorksSection realestate={realestate} realestateads={realestateads} />
      </main>
      <Footer />
    </>
  );
}
