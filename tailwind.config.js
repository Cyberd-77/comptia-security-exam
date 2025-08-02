/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind to scan the specified files for CSS classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
