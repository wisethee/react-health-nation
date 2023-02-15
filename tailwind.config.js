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
      primary: "#F9B959",
      "on-primary": "#F9B959",
      "primary-container": "#F9B959",
      "on-primary-container": "#F9B959",
      secondary: "#F9B959",
      "on-secondary": "#F9B959",
      "secondary-container": "#F9B959",
      "on-secondary-container": "#F9B959",
      tertiary: "#F9B959",
      "on-tertiary": "#F9B959",
      "tertiary-container": "#F9B959",
      "on-tertiary-container": "#F9B959",
      surface: "#F9B959",
      "on-surface": "#F9B959",
      "surface-container": "#F9B959",
      "on-surface-container": "#F9B959",
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
          fontWeight: "500",
        },
      ],
      "headline-medium": [
        "2rem",
        {
          lineHeight: "2.625rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "headline-large": [
        "2.25rem",
        {
          lineHeight: "2.875rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "display-small": [
        "2.625rem",
        {
          lineHeight: "3.375rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "display-medium": [
        "3.5rem",
        {
          lineHeight: "4rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "display-large": [
        "4.5rem",
        {
          lineHeight: "5.25rem",
          letterSpacing: "0",
          fontWeight: "500",
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
