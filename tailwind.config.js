module.exports = {
  purge: {
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#009DEB'
        }
      },
      screens: {
        'xs': {'min': '300px', 'max': '640px'},
      }
    },
  },
  plugins: [],
};
