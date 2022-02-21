import getBrainCalcOptions from './games/brain-calc/model.js';
import getBrainEvenOptions from './games/brain-even/model.js';

export const GAMES = Object.freeze({
  EVEN: 'EVEN',
  CALC: 'CALC',
});

const GAMES_OPTIONS = Object.freeze({
  [GAMES.EVEN]: getBrainEvenOptions,
  [GAMES.CALC]: getBrainCalcOptions,
});

const getOptions = (game) => GAMES_OPTIONS[game]();

export default getOptions;
