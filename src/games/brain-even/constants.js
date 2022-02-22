import {
  GAME_RESULTS,
} from '../../constants.js';
import {
  showBy,
  showCongratulation,
} from '../../utils/console.js';

export const EVEN = 'EVEN';
export const ODD = 'ODD';
export const NUMBER_TYPES = new Map([
  [0, EVEN],
  [1, ODD],
]);

export const ANSWERS = Object.freeze({
  [EVEN]: 'yes',
  [ODD]: 'no',
});

export const FINAL_TYPES = Object.freeze({
  [GAME_RESULTS.WIN]: (name) => showCongratulation(name),
  [GAME_RESULTS.LOSE]: (name) => showBy(name),
});

export const rulesMsg = 'Answer "yes" if the number is even, otherwise answer "no".';
