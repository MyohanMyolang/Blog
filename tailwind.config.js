const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        ZeroToFullSize: {
          "100%": { transform: "scale(1)" },
          "0%": { transform: "scale(0)" },
        },
      },
      textShadow: {
        DEFAULT: "0 0 20px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    ({ addUtilities }) => {
      addUtilities({
        ".NavItem": {
          "@apply text-2xl dark:text-cyan-200 text-gray-700": "",
          "transition-duration": "200ms",
          "&:hover": {
            color: "white",
          },
          "&:active": {
            color: "gray",
          },
        },
      });
    },
    require("@tailwindcss/typography"),
  ],
};
