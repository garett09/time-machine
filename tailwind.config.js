/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: { display: ["Poppins", "sans-serif"] },
  },
  extend: {
    //colors used in the project
    primary: "#05B6D3",
    secondary: "#EF863E",
  },
  plugins: [],
};

export default tailwindConfig;
