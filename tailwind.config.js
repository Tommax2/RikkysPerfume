/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page:    "#FAF8FC",
        deep:    "#EDE7F6",
        surface: "#F3D9FF",
        plum:    "#3B0A45",
        brand:   "#6A0DAD",
        "brand-hi": "#B57CFF",
        gold:    "#D4A373",
        "gold-hi": "#e8c49a",
        muted:   "#7a6882",
        ink:     "#1F1B24",
        cream:   "#FAF8FC",
        "wa-green": "#25D366",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans:  ['"Josefin Sans"', "sans-serif"],
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #B57CFF 10%, #6A0DAD 55%, #5A0A9D)",
        "grad-plum":  "linear-gradient(90deg, #3B0A45 0%, #5a0e80 50%, #3B0A45 100%)",
      },
      screens: {
        xs: "430px",
      },
    },
  },
  plugins: [],
};
