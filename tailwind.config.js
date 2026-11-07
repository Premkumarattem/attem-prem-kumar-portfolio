/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#060608",
        cardBg: "rgba(18, 18, 24, 0.85)",
        crimson: "#ef4444",
        brandRed: "#ff1e38",
        darkRed: "#991b1b",
        accentRed: "#ff334b",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'red-glow': '0 0 25px -3px rgba(239, 68, 68, 0.45)',
        'red-glow-lg': '0 0 45px -5px rgba(255, 30, 56, 0.4)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
