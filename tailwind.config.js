/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/src/assets/Rectangle 1.png')",
      },
      colors: {
        primary: "#F9A51A",
      },
      fontFamily: {
        title: "Bebas Neue",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
