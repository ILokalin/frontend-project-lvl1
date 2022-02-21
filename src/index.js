import {
  showMessage,
  showGreeting,
  getName,
} from './utils/console.js';
import { welcomeMsg } from './utils/messages.js';
import { FINAL_TYPES } from './games/brain-even/constants.js';
import getOptions from './model.js';
import runGame from './game.js';
import initStore from './store.js';
import { CORRECT_ANSWER_COUNTER_LIMIT } from './constants.js';

const app = (game) => {
  showMessage(welcomeMsg);
  const name = getName();
  showGreeting(name);
  const gameResult = runGame(initStore(), CORRECT_ANSWER_COUNTER_LIMIT, ...getOptions(game));
  FINAL_TYPES[gameResult](name);
};

export default app;
