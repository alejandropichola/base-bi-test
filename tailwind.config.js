const { guessProductionMode } = require('@ngneat/tailwind');
const {banpais} = require('./tailwind/banpais');
const {bancoIndustrial} = require('./tailwind/banco-industrial');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  purge: {
    enabled: guessProductionMode(),
    content: ['./src/**/*.{html,ts}'],
  },
  theme: process.env.NG_APP_BANK === 'banco-industrial' ?
    bancoIndustrial
  : banpais,
  plugins: [],
};
