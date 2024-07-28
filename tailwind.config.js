/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        lightBlue: colors.sky,
        sky: colors.sky,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        slate: colors.slate,
        zinc: colors.zinc,
        gray: colors.gray,
        neutral: colors.slate,
        stone: colors.stone,
      },
    },
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/aspect-ratio")],
};
