/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0e1b2b',
          'navy-light': '#1a2d45',
          'navy-dark': '#080f18',
          gold: '#c9a96e',
          'gold-light': '#ddb87a',
          'gold-dark': '#a8864a',
          beige: '#ede9da',
          'beige-dark': '#d4cfc0',
          ivory: '#faf9f6',
        },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern':
          "radial-gradient(ellipse at 30% 60%, rgba(201,169,110,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.04) 0%, transparent 50%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
