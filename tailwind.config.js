/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A90E2", // Main brand color
          light: "#E6F0FB", // Light variant
          dark: "#003D6E", // Dark variant
          inactive: "#D9DDE7",
          faded: "#F4F7FE",
        },
        accent: {
          DEFAULT: "#5539FF",
          light: "#A362D6",
          dark: "#3965FF",
        },
        text: {
          primary: "#2b3674",
          secondary: "#A3AED0", // Secondary text
          muted: "#A3AED0", // Muted/disabled text
        },
      },
    },
  },
  plugins: [],
};
