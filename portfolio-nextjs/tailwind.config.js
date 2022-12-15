
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cove-bg-image': "url('../public/mainBackground.jpg')",
        'nav-logo': "url('../public/assets/logos/cLogo.png')",
      },
      colors: {
        'electric-blue': '#66FCF1',
        'cool-grey': '#C5C6C7',
        'cool-white': '#ECF0F3',
        'dark-blue': '#45A29E',

      },
    },
  },
  plugins: [],
};
