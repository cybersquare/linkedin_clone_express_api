/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      primary: "#ECBE44",
      secondary: "",
      error: "red",
      background: "#1C1F2C",
      success: "#228B22"
      // "bg-primary": "#173748",
      // primary: {
      //   50: "#eff6ff",
      //   100: "#dbeafe",
      //   200: "#bfdbfe",
      //   300: "#93c5fd",
      //   400: "#60a5fa",
      //   500: "#3b82f6",
      //   600: "#2563eb",
      //   700: "#1d4ed8",
      //   800: "#1e40af",
      //   900: "#1e3a8a",
      // },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}