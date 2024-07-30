/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "background-dark": "var(--background-dark)",
        "background-light": "var(--background-dark)",
        "background-gray": "var(--background-dark)",
        "text-light": "var(--text-light)",
        "text-dark": "var(--text-dark)",
        hightlight: "var(--hightlight)",
      },
    },
  },
  plugins: [],
};
