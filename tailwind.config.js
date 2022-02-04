const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  purge: {
    enabled: guessProductionMode(),
    content: ['./src/**/*.{html,ts}'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#009DEB',
        },
        gray: {
          250: '#D0D0D0',
          550: '#848484',
        },
      },
      fontSize: {
        '28px': '1.75rem',
      },
      borderRadius: {
        '5px': '0.313rem',
      },
      width: {
        '50px': '3.125rem',
      },
      screens: {
        xs: { min: '300px', max: '640px' },
      },
    },
  },
  plugins: [],
};
