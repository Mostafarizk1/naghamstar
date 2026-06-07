import type { NavLink, ServiceItem, ValueItem, Project } from '@/types';

export const navLinks: NavLink[] = [
  { id: 'about', label: { ar: 'من نحن', en: 'About' }, href: '#about' },
  { id: 'services', label: { ar: 'خدماتنا', en: 'Services' }, href: '#services' },
  { id: 'why', label: { ar: 'لماذا نغم ستار', en: 'Why Nagham Star' }, href: '#why' },
  { id: 'vision', label: { ar: 'رؤيتنا', en: 'Our Vision' }, href: '#vision' },
  { id: 'projects', label: { ar: 'المشاريع', en: 'Projects' }, href: '/projects' },
  { id: 'contact', label: { ar: 'تواصل معنا', en: 'Contact' }, href: '#contact' },
];

export const services: ServiceItem[] = [
  {
    id: 'marketing',
    icon: 'TrendingUp',
    title: { ar: 'التسويق والتطوير العقاري', en: 'Real Estate Marketing & Development' },
    description: {
      ar: 'نصنع هوية تسويقية قوية للمشاريع العقارية، ونرفع قيمتها في السوق من خلال استراتيجيات مدروسة وتنفيذ احترافي يحكي قصة كل مشروع.',
      en: 'We craft powerful marketing identities for real estate projects, elevating their market value through strategic planning and professional execution that tells each project\'s story.',
    },
    variant: 'navy',
  },
  {
    id: 'management',
    icon: 'Building2',
    title: { ar: 'إدارة وتشغيل المجمعات التجارية', en: 'Commercial Complex Management' },
    description: {
      ar: 'ندير المجمعات التجارية بكفاءة عالية، محوّلين إياها إلى وجهات حيّة تجذب الزوار وتحقق عوائد مستدامة ومتنامية.',
      en: 'We manage commercial complexes with operational excellence, transforming them into vibrant destinations that attract visitors and generate sustainable, growing returns.',
    },
    variant: 'gold',
  },
  {
    id: 'brands',
    icon: 'Star',
    title: { ar: 'استقطاب العلامات التجارية الكبرى', en: 'Attracting Major Brands' },
    description: {
      ar: 'نمتلك شبكة واسعة وعلاقات راسخة تمكّننا من استقطاب العلامات التجارية المؤثرة التي ترفع مستوى المشروع وتضمن حركة تجارية قوية.',
      en: 'With an extensive network and established relationships, we attract influential brands that elevate project prestige and ensure strong commercial activity.',
    },
    variant: 'ivory',
  },
  {
    id: 'contracting',
    icon: 'HardHat',
    title: { ar: 'المقاولات العامة والصيانة', en: 'General Contracting & Maintenance' },
    description: {
      ar: 'نقدم خدمات المقاولات والصيانة بأعلى معايير الجودة، لضمان استمرارية تشغيل المشاريع باحترافية وموثوقية دون انقطاع.',
      en: 'We deliver contracting and maintenance services to the highest quality standards, ensuring uninterrupted project operations with reliability and precision.',
    },
    variant: 'navy-light',
  },
  {
    id: 'assets',
    icon: 'BarChart3',
    title: { ar: 'إدارة الأصول والمشاريع الاستثمارية', en: 'Asset & Investment Management' },
    description: {
      ar: 'نحمي الأصول العقارية ونعظّم عوائدها من خلال إدارة استثمارية استراتيجية تضمن النمو المستدام وصناعة الفرص على المدى البعيد.',
      en: 'We protect real estate assets and maximize their returns through strategic investment management that ensures sustainable long-term growth and opportunity creation.',
    },
    variant: 'beige',
  },
];

export const values: ValueItem[] = [
  { id: 'professionalism', icon: 'Award', title: { ar: 'الاحترافية', en: 'Professionalism' } },
  { id: 'credibility', icon: 'ShieldCheck', title: { ar: 'المصداقية', en: 'Credibility' } },
  { id: 'quality', icon: 'Gem', title: { ar: 'الجودة', en: 'Quality' } },
  { id: 'innovation', icon: 'Lightbulb', title: { ar: 'الابتكار', en: 'Innovation' } },
  { id: 'opportunities', icon: 'Rocket', title: { ar: 'صناعة الفرص', en: 'Creating Opportunities' } },
];

export const projects: Project[] = [
  {
    id: 'devora-square',
    slug: 'devora-square',
    title: { ar: 'مجمع ديورا سكوير', en: 'Devora Square' },
    category: { ar: 'وجهة تجارية', en: 'Commercial Destination' },
    location: { ar: 'حي الشرائع، مكة المكرمة', en: 'Al Sharai District, Makkah' },
    image: '/images/hero-bg.jpg',
    isPlaceholder: false,
  },
];
