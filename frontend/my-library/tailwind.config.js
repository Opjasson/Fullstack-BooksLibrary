/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        'bg-primary' : '#5AB2FF',
        'nav-primary' : '#A0DEFF',

      },
    },
  },
  plugins: [],
}

