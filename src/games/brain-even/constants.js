import {
  EVEN,
  ODD,
  GAME_RESULTS,
} from '../../utils/constants.js';
import {
  showBy,
  showCangrat,
} from '../../utils/console.js';

export const CORRECT_ANSWER_COUNTER_LIMIT = 3;

export const ANSWERS_VARIANTS = Object.freeze({
  [EVEN]: 'yes',
  [ODD]: 'no',
});

export const FINAL_TYPES = Object.freeze({
  [GAME_RESULTS.WIN]: (name) => showCangrat(name),
  [GAME_RESULTS.LOSE]: (name) => showBy(name),
});
