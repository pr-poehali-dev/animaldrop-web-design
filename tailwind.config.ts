
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // CS2 рарности
        common: "#b0c3d9",
        uncommon: "#5e98d9",
        rare: "#4b69ff",
        mythical: "#8847ff",
        legendary: "#d32ce6",
        ancient: "#eb4b4b",
        immortal: "#e4ae39",
        // Цвета для фона страниц
        'dark-blue': '#0A1929',
        'dark-purple': '#1E1033',
        'dark-green': '#0A291B',
        'dark-orange': '#291A0A',
        'dark-gray': '#121212',
        // Неоновые цвета
        'neon-blue': '#00F0FF',
        'neon-pink': '#FF00FF',
        'neon-green': '#00FF66',
        'neon-yellow': '#FFFF00',
        'neon-purple': '#9D00FF',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        "fade-in": { 
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "glow": {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.3)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px var(--glow-color)" },
          "50%": { boxShadow: "0 0 20px var(--glow-color), 0 0 30px var(--glow-color)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 10s linear infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite"
      },
      fontFamily: {
        'game': ['Rajdhani', 'sans-serif'],
        'display': ['Orbitron', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise-pattern': "url('/noise.png')",
        'hex-pattern': "url('/hex-pattern.png')",
        'grid-lines': "linear-gradient(to right, rgba(6, 37, 90, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 37, 90, 0.2) 1px, transparent 1px)"
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config;
