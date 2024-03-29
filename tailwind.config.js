/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      "purple": "#6247fa",
      "red": "#f94851",
      "white": "#fff",
      "gray": "#5d6165",
      "darkblue": "#152432",
      "coral": "#fc787f",
      "lightcoral": "#f8858b25",
      "primary": "#fff5f5",
      "service-box-1": "#fff0e8",
      "service-box-2": "#ffebed",
      "service-box-3": "#faebf8",
    },
    fontFamily: {
      "pop": ["Poppins", "sans-serif"]
    },
    fontWeight: {
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700",
    }
  },
  plugins: [],
}