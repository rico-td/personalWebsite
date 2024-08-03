/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "background-dark": "var(--background-dark)",
        "background-light": "var(--background-dark)",
        "background-gray": "var(--background-dark)",
        "text-light": "var(--text-light)",
        "text-dark": "var(--text-dark)",
        hightlight: "var(--hightlight)",
        "armor-wash": "var(--armor-wash)",
      },
    },
  },
  plugins: [],
};
