import type { Config } from "tailwindcss";

/**
 * Savanna Motors — Design System
 * Brand: Import · Finance · Drive
 * Palette: Savanna green (primary) · Acacia gold (accent) · Sand (neutral)
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        savanna: {
          50: "#f1f7f3",
          100: "#dcece1",
          200: "#bcd9c6",
          300: "#90c0a3",
          400: "#5fa07a",
          500: "#3d825c",
          600: "#2d6a4f",
          700: "#245640",
          800: "#1b4332",
          900: "#12301f",
          950: "#0b1f14",
        },
        gold: {
          50: "#fdf8ed",
          100: "#fbeccb",
          200: "#f6d893",
          300: "#f0bd57",
          400: "#e9a23b",
          500: "#d9871f",
          600: "#bd6816",
          700: "#9d4c15",
          800: "#803c18",
          900: "#6b3217",
        },
        sand: {
          50: "#fbf9f4",
          100: "#f7f3ec",
          200: "#efe8db",
          300: "#e3d9c6",
          400: "#d2c3a8",
        },
        ink: "#14201b",
        muted: "#6b7a72",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,32,27,.04), 0 8px 24px rgba(20,32,27,.06)",
        lift: "0 12px 34px rgba(20,32,27,.14)",
        ring: "0 0 0 5px rgba(233,162,59,.25)",
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: { "2xl": "1200px" },
      },
    },
  },
  plugins: [],
};

export default config;
