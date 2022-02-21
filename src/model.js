import getBrainCalcOptions from './games/brain-calc/model.js';
import getBrainEvenOptions from './games/brain-even/model.js';
import getBrainGcdOptions from './games/brain-gcd/model.js';

export const GAMES = Object.freeze({
  EVEN: 'EVEN',
  CALC: 'CALC',
  GCD: 'GCD',
});

const GAMES_OPTIONS = Object.freeze({
  [GAMES.EVEN]: getBrainEvenOptions,
  [GAMES.CALC]: getBrainCalcOptions,
  [GAMES.GCD]: getBrainGcdOptions,
});

const getOptions = (game) => GAMES_OPTIONS[game]();

export default getOptions;
