/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "2xs": "345px",
      // iphone SE
      
    },
    extend: {
      colors: {
        main: {
          DEFAULT: "#4A4A4A"
        },
        egray: {
          100: "#F1F3F4",
          200: "#EAEAEA"
        },
        eblue: {
          50: "#D6E4EC",
          500: "#007BFF"
        },
        enavy: {
          700: "#031634"
        },
        ered: {
          300: "#FF6F61",
        },
        egold: {
          50: "#F5E6CA"
        },
        epink: {
          50: "#F9D5E5"
        },
        success: {
          DEFAULT: "#5BA142"
        },
        error: {
          DEFAULT: "#C52121"
        },

    },
  },
  plugins: [],
}
}