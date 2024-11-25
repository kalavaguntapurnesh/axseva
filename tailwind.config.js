/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        mainColor: "#16b6ea",
        // mainColor: "#bb2b36",
        // mainColor: "#187e4c",
        headingColor: "#19191B",
        sideHeading: "#474749",
        grayColor: "#585858",
      },
    },
  },
  plugins: [],
};
