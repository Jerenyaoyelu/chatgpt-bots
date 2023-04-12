/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './routes/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        walle: 'url(/images/walle-bg.jpg)',
        'gradient-linear': 'linear-gradient(to top, #a3bded 0%, #6991c7 100%)',
        primary:
          'linear-gradient(97deg, rgba(242,247,253,1) 0%, rgba(240,244,253,1) 90%)',
        secondary:
          'linear-gradient(180deg, rgba(224,233,253,1) 0%, rgba(233,236,241,1) 90%)',
      },
      boxShadow: {
        'bot-layout': '0 0 0 10px rgba(255, 255, 255,.4)',
      },
    },
  },
  plugins: [],
};
