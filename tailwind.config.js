/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }

      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

