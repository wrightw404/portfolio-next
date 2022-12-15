
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cove-bg-image': "url('../public/mainBackground.jpg')",
      },
      colors: {
        'electric-blue': '#66FCF1',
        'cool-grey': '#C5C6C7'
      },
    },
  },
  plugins: [],
};
