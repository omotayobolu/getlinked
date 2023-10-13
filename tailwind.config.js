/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        "primary-pink": "#FE34B9",
        "primary-purple": "#903AFF",
        "secondary-purple": "#D434FE",
        "dark-purple": "#150E28",
        error: "#FF708D",
      },
      listStyleImage: {
        checkmark: 'url("/assets/list terms.png")',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
