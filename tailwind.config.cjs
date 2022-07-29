/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'blue-100': 'var(--blue-100)',
      'green-100': 'var(--green-100)',
      'green-200': 'var(--green-200)',
      'green-300': 'var(--green-300)',
      'green-400': 'var(--green-400)',
      'green-500': 'var(--green-500)',
      'grey-100': 'var(--grey-100)',
      'grey-200': 'var(--grey-200)',
      'pink-100': 'var(--pink-100)',
      'black-100': 'var(--black-100)',
      'white-100': 'var(--white-100)',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
