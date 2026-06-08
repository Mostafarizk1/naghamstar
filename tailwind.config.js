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
          /* Official colors from identity guide */
          navy:          '#012847',   // Navy Dark  — primary bg
          'navy-medium': '#33526b',   // Navy Medium — alternate sections
          'navy-light':  '#1a3d5c',   // derived lighter
          'navy-dark':   '#010f1c',   // footer / deepest
          gold:          '#cdb689',   // Gold — accent primary
          'gold-light':  '#dcc99a',   // hover states
          'gold-dark':   '#a8935e',   // pressed / shadows
          beige:         '#e1d3b8',   // Beige Light — light mode bg
          'beige-dark':  '#c8b89a',   // borders / dividers light mode
          ivory:         '#f8f4ee',   // near-white bg
        },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'Cairo', 'sans-serif'],
        lyon:  ['var(--font-lyon)',  'serif'],
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 2s infinite',
        'fade-in':        'fadeIn 0.6s ease forwards',
        'slide-up':       'slideUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
