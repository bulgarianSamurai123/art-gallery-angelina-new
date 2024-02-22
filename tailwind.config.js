/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "430px",
      sm: "640px",
      md: "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      "white": "#FFF",
      "black": "#000",
      "gray-190": "#BEBEBE",
      "gray-250": "#3D3D3D",
      "gray-300": "#505050",
      "gray-380": "#626262",
      "gray-490": "#7C7C7C",
      "gray-570": "#9C9789",
      "gray-600": "#AA9B88",
      "gray-730": "#C6BCAF",
      "gray-800": "#D5CDC3",
      "gray-820": "#D1D1D1",
      "gray-850": "#D9D9D9",
      "red-100": "#f1ACC9",
      "red-500": "#A10C4A",
      "red-600": "#FF3333",
      "red-rosso-corsa": "#D10000",
      "green-100": "#A2F0BC",
      "green-500": "#12BD4B",
      "forest-green": "#228B22",
      "orange-tiger": "#FC6A03",
      "link-blue": '#0000FF',
      "purple-121": "#7949FF",
      "purple-233": "#E9E1FF",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      brittany: ["brittany", "sans"],
    },
    extend: {
      backgroundImage: {
        "background-home": "url('/assets/image_home.png')",
      },
      scale: {
        30: "0.3",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
      gridTemplateRows: {
        auto: "repeat(auto-fill, minmax(20rem, 1fr))",
      },
      width: {
        500: "500px",
      },
      height: {
        700: "700px",
      },
    },
  },
  plugins: [],
};
