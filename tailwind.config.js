/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#6C7184",
        "primary-400": "#4C526C",
        "primary-500": "#212529",
        "primary-800": "#21263C",
        "redish-500": "#EB001B",
        // "primary-50": "#E6F8F1",
        // "primary-500": "#00BC71",
        // "primary-900": "#008550",
        "secondary-500": "#FCD63A",
        "warning-50": "#FFF4E6",
        "warning-400": "#FFAA33",
        "warning-500": "#FF9500",
        "success-50": "#E6F2FF",
        "success-400": "#3395FF",
        "success-500": "#007AFF",
        "success-900": "#00336B",
        "error-50": "#FFEBEA",
        "error-500": "#FF3B30",
        "error-400": "#FF6259",
      },
      screens: {
        "1lg": "1300px",
        "2xl": "1440px",
      },
    },
  },
  safelist: [
    "stroke-primary-500",
    "stroke-success-500",
    "stroke-neutral-500",
    "stroke-error-500",
    "stroke-warning-500",
    "bg-success-50",
    "bg-neutral-50",
    "bg-error-50",
    "bg-warning-50",
  ],
  plugins: [],
};