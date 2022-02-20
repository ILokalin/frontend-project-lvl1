import brainEven from './games/brain-even/index.js';

export const GAMES = Object.freeze({
  EVEN: 'EVEN',
});

export const APP_SELECTOR = Object.freeze({
  [GAMES.EVEN]: brainEven,
});
