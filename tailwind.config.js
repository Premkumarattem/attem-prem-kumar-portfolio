/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#05070f",
        cardBg: "rgba(15, 23, 42, 0.75)",
        cardBorder: "rgba(56, 189, 248, 0.2)",
        neonCyan: "#00f2fe",
        neonBlue: "#4facfe",
        neonPurple: "#7f00ff",
        accentGlow: "#38bdf8"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 242, 254, 0.4)',
        'purple-glow': '0 0 25px -5px rgba(127, 0, 255, 0.4)',
        'blue-glow': '0 0 25px -5px rgba(79, 172, 254, 0.4)',
        'card-glow': '0 10px 30px -10px rgba(0, 242, 254, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
