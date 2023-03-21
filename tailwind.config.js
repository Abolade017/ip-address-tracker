const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/pattern-bg-desktop.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'very-dark-gray': ' hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)'

      }
    },
  },
  plugins: [],
}
