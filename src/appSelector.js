import { GAMES } from './constants.js';
import brainEven from './games/brain-even/index.js';

const APP_SELECTOR = Object.freeze({
  [GAMES.EVEN]: brainEven,
});

export default APP_SELECTOR;
