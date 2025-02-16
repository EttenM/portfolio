/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        literata: ["var(--font-literata)"],
        rubikMonoOne: ["var(--font-rubikMonoOne)"],
        diplomataSC: ["var(--font-diplomataSC)"],
      },
      screens: {
        s: "400px",
        xs: "480px",
        md: "800px",
      },
      colors: {
        mainColor: "var(--mainColor)",
        secondColor: "var(--secondColor)",
        accent: "var(--accentColor)",
        secondAccent: "var(--secondAccent)",
      },
    },
  },
  plugins: [],
};
