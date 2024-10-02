/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        literata: ["var(--font-literata)"],
      },
      screens: {
        s: "400px",
        xs: "480px",
        md: "800px",
      },
      colors: {
        mainColor: "#EAEAEA",
        black: "#000000",
        accent: "#1E3D2E",
        gold: "#DFBE6A",
        gray: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
