/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1A1F28",
        primary: "#EA4C49",
        "border-color": "#253146",
        paragraph: "#737F96",
      },
    },
  },
  plugins: [],
};
