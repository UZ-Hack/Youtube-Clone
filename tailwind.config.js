/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '636px',
        'video': '902px',
        'nvr': "546px",
        'main': '550px',
        'ms': '500px',
        'zero': "0px"
      },
    },
  },
  plugins: [],
}

