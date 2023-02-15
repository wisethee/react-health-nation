/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "906px",
      lg: "1280px",
      xl: "1440px",
    },
    colors: {
      primary: "#006970",
      "on-primary": "#ffffff",
      "primary-container": "#7af4ff",
      "on-primary-container": "#002022",
      secondary: "#4a6365",
      "on-secondary": "#ffffff",
      "secondary-container": "#cce8ea",
      "on-secondary-container": "#051f21",
      tertiary: "#4f5f7d",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#d7e2ff",
      "on-tertiary-container": "#0a1b36",
      "error-container": "#ffdad6",
      "on-error-container": "#410002",
      surface: "#fafdfc",
      "on-surface": "#191c1c",
      "surface-container": "#dae4e5",
      "on-surface-container": "#3f4849",
      black: "#000000",
      white: "#ffffff",
    },
    fontSize: {
      "body-small": [
        "0.875rem",
        {
          lineHeight: "1.125rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      "body-medium": [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      "body-large": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      "label-small": [
        "0.6875rem",
        {
          lineHeight: "1rem",
          letterSpacing: "0.06em",
          fontWeight: "500",
        },
      ],
      "label-medium": [
        "0.875rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.06em",
          fontWeight: "500",
        },
      ],
      "label-large": [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.06em",
          fontWeight: "500",
        },
      ],
      "title-small": [
        "1.125rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "title-medium": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "title-large": [
        "1.375rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "headline-small": [
        "1.75rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      "headline-medium": [
        "2rem",
        {
          lineHeight: "2.625rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      "headline-large": [
        "2.25rem",
        {
          lineHeight: "2.875rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      "display-small": [
        "3.625rem",
        {
          lineHeight: "4.125rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      "display-medium": [
        "3.5rem",
        {
          lineHeight: "4rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      "display-large": [
        "4.5rem",
        {
          lineHeight: "5.25rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "16px" },
      });
    }),
    require("@tailwindcss/forms"),
  ],
};
