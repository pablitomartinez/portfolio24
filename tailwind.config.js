// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#60A5FA",
        accent: "#FB7185",
        lightBg: "#FFFFFF",
        darkBg: "#1F2937",
        lightText: "#000000",
        darkText: "#FFFFFF",
      },
      backgroundImage: {
        "light-gradient":"linear-gradient(to right, #89CFF0, #A9DFBF, #FFFACD)",
        "dark-gradient": "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
