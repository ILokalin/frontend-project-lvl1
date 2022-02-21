import { GAMES } from './constants.js';
import brainEven from './games/brain-even/index.js';
import brainCalc from './games/brain-calc/index.js';

const APP_SELECTOR = Object.freeze({
  [GAMES.EVEN]: brainEven,
  [GAMES.CALC]: brainCalc,
});

export default APP_SELECTOR;
