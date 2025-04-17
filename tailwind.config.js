/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}",],
  theme: {
    extend: {
      borderWidth: {
        'px0625': '0.0625rem', // custom border width (1px)
      },
      colors: {
        grayCustom: 'rgba(128, 128, 128, 0.7)', // custom border color
      },
    },
  },
  plugins: [],
}

