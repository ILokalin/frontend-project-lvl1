import { showMessage, getConsole } from './utils.js';
import {
  welcomeMsg,
  getNameMsg,
  greetingMsg,
} from './constants.js';

const greetPlayer = () => {
  showMessage(welcomeMsg);
  const name = getConsole(getNameMsg);
  showMessage(greetingMsg, name);
  return name;
};

export default greetPlayer;
