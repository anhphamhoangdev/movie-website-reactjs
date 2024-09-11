/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('../public/banner.png')"
      },
    },
  },
  plugins: [],
}