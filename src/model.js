import getBrainCalcOptions from './games/brain-calc.js';
import getBrainEvenOptions from './games/brain-even.js';
import getBrainGcdOptions from './games/brain-gcd.js';
import getBrainProgressionOptions from './games/brain-progression.js';
import getBrainPrimeOptions from './games/brain-prime.js';

export const GAMES = Object.freeze({
  EVEN: 'EVEN',
  CALC: 'CALC',
  GCD: 'GCD',
  PROGRESSION: 'PROGRESSION',
  PRIME: 'PRIME',
});

const getOptions = (game) => {
  switch (game) {
    case GAMES.EVEN:
      return getBrainEvenOptions();
    case GAMES.CALC:
      return getBrainCalcOptions();
    case GAMES.GCD:
      return getBrainGcdOptions();
    case GAMES.PROGRESSION:
      return getBrainProgressionOptions();
    case GAMES.PRIME:
      return getBrainPrimeOptions();
    default:
      return getBrainEvenOptions();
  }
};

export default getOptions;
