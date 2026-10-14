/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#070510',
          'bg-secondary': '#0D0B19',
          'bg-card': '#101322',
          'bg-elevated': '#171427',
          border: '#353047',
          'border-hover': '#7C3AED',
          primary: '#A855F7',
          violet: '#C084FC',
          'deep-purple': '#7C3AED',
          text: '#F8FAFC',
          muted: '#A1A1B8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 30px -5px rgba(168, 85, 247, 0.25)',
        'purple-glow-lg': '0 0 50px -10px rgba(168, 85, 247, 0.35)',
        'purple-ring': '0 0 0 2px rgba(168, 85, 247, 0.4), 0 0 25px 0 rgba(168, 85, 247, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
