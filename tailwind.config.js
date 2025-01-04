/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        PeacockBlue: {
          100: "#baf3e6",
          400: "#76e8cd",
          800: "#003c47",
          900: "#074c59",
        }
      },
    }
  },
  plugins: [],
}