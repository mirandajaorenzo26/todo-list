/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'navy-blue': '#15172A',
      },
      fontFamily: {
        'roboto-mono': "'Roboto-Mono', monospace",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
