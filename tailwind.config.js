/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './*.js',
    "./game/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx,vue}", // Jeśli używasz innych katalogów / rozszerzeń, dostosuj to
  ],
  theme: {
    extend: {
      width: {
        '350': '350px',
      },
      height: {
        '400': '400px',
        '500': '500px',
      },
      fontFamily: {
        hacked: ['Hacked', 'sans-serif'] // 'sans-serif' jest czcionką zapasową
      },
      top: {
        '55': '55%',
      },
      translate: {
        '30': '30%',
      },
    },
  },
  plugins: [],
}

