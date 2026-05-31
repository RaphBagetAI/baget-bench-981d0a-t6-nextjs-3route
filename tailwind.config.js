/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-stone": "#F5F1EB",
        "forest-green": "#1B4332",
        "warm-amber": "#D4A853",
        "charcoal": "#2D3436"
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "8px"
      },
      boxShadow: {
        natural: "0 2px 12px rgba(0,0,0,0.05)"
      }
    }
  },
  plugins: []
}

module.exports = config
