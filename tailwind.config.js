/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: "var(--Rubik)",
      Poppins: "var(--Poppins)",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        mainBgColor: "var(--mainBgColor)",
        secondaryBgColor: "var(--secondaryBgColor)",
        thirdBgColor: "var(--thirdBgColor)",
        primaryFontColor: "var(--primaryFontColor)",
        additionalBgColor: "var(--additionalBgColor)",
      },
    },
  },
  plugins: [],
};
