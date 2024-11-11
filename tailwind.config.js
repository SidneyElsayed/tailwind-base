/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        seafoam: '#b8eaf4',
        teal: '#126374',
        sage: '#949a8c',
        darksage: '#475653',
        sandy: '#d5c5b5',
      }
    },
  },
  plugins: [],
}
