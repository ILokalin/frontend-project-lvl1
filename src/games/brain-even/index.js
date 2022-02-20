import {
  showGreeting,
  getName,
  showMessage,
} from '../../utils/console.js';
import {
  initAnswersState,
  showRules,
} from './helper.js';
import { FINAL_TYPES } from './constants.js';
import { processGame } from './processGame.js';
import { welcomeMsg } from '../../utils/messages.js';

const app = () => {
  showMessage(welcomeMsg);
  const name = getName();
  showGreeting(name);
  showRules();
  const gameResult = processGame(initAnswersState());
  FINAL_TYPES[gameResult](name);
};

export default app;
