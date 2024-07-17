/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'colombia-beach': "url('https://www.civitatis.com/blog/wp-content/uploads/2022/08/mejores-playas-colombia.jpg')",
      },
    },
  },
  plugins: [],
}

