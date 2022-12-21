const plugin = require('tailwindcss/plugin');

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
        'second-bg-image': "url('../public/secondaryBG.jpg')",
        'headshot-image': "url('../public/headshot-photo.jpeg')",
      },
      colors: {
        'electric-blue': '#66FCF1',
        'cool-grey': '#C5C6C7',
        'dark-grey': '#1F2833',
        'cool-white': '#ECF0F3',
        'dark-blue': '#45A29E',

      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
            }
          )
        }
      )
    })
  ],
};
