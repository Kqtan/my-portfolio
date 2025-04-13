/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        inter: ['Inter', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        ntg: ['Nothing You Could Do', 'cursive']
      },
      colors: {
        pythonYellow: "#ffd43b",
        pythonBlue: "#306998",
        tensorFlowBg: "#ff6f00",
        tensorFlowText: "#ffa800"
      },
    },
    plugins: [],
  }
}
