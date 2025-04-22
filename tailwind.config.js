// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        subtle: "var(--color-subtle)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        background: "var(--color-background)",
        "accent-light": "var(--color-accent-light)",
        "accent-light-purple": "var(--color-accent-light-purple)",
        // Dark mode colors
        "dark-primary": "#8a3dd2",
        "dark-background": "#121212",
        "dark-card": "#1e1e30",
        "dark-text": "#e1e1e1",
      },
    },
  },
  plugins: [],
};
