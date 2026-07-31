import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        primary: {
          50: "#eef7ff",
          100: "#d8edff",
          400: "#4aa3ff",
          500: "#1677ff",
          600: "#0f62d6",
          700: "#0b4fb0",
          900: "#07366f"
        },
        navy: {
          900: "#071827",
          950: "#03111f"
        },
        teal: {
          400: "#24d3c1",
          500: "#0fb5a8"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(7, 24, 39, 0.12)",
        glow: "0 20px 70px rgba(22, 119, 255, 0.22)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
