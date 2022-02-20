import {
  showMessage,
  showGreeting,
  getName,
} from './utils/console.js';
import { welcomeMsg } from './utils/messages.js';
import { initAnswersState } from './games/brain-even/helper.js';
import { FINAL_TYPES } from './games/brain-even/constants.js';
import { APP_SELECTOR } from './constants.js';

const app = (game) => {
  showMessage(welcomeMsg);
  const name = getName();
  showGreeting(name);
  const gameResult = APP_SELECTOR[game](initAnswersState());
  FINAL_TYPES[gameResult](name);
};

export default app;
