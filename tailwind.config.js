/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: ["bg-blue-900", "bg-red-900", "bg-green-900", "bg-teal-900", "bg-purple-900", "bg-pink-900", "bg-yellow-900", "bg-lime-900"],
}


