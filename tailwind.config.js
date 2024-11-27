/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        // mainColor: "#16b6ea",
        mainColor: "#0064c8",
        // mainColor: "#bb2b36",
        // mainColor: "#187e4c",
        // headingColor: "#19191B",
        headingColor: "#444",
        sideHeading: "#474749",
        grayColor: "#585858",
        navGray: "#dddddd",
        buttons: "#0064c8",
        footerbg: "#24272b",
        footerItems: "#9ca3af",
      },
    },
  },
  plugins: [],
};
