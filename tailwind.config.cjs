/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgBlue: "#16ABF8",
        BgGray1: "#F4F4F4",
        BgGray2: "#E5E5E5",
        Title: "#111111",
        Line1: "#888888",
        Line2: "#4A4A4A",
        Line3: "#A4A4A4",
        Line4: "#D8D8D8",
        PriorityRed: "#ED4C5C",
        PriorityOrange: "#F8A541",
        PriorityGreen: "#00A790",
        PriorityBlue: "#428BC1",
        PriorityPurple: "#428BC1",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "white",
  },
};
