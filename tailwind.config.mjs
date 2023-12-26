const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D33CC",
      },
      fontFamily: {
        rubric: ["Rubric", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
