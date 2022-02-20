import {
  showMessage,
  showGreeting,
  getName,
} from './utils/console.js';
import { welcomeMsg } from './utils/messages.js';
import { initAnswersState } from './games/brain-even/helper.js';
import game from './games/brain-even/index.js';
import { FINAL_TYPES } from './games/brain-even/constants.js';

const app = () => {
  showMessage(welcomeMsg);
  const name = getName();
  showGreeting(name);
  const gameResult = game(initAnswersState());
  FINAL_TYPES[gameResult](name);
};

export default app;
