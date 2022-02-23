import { getConsole } from './utils.js';
import {
  welcomeMsg,
  getNameMsg,
  greetingMsg,
} from './constants.js';

const greetPlayer = () => {
  console.log(welcomeMsg);
  const name = getConsole(getNameMsg);
  console.log(greetingMsg, name);
  return name;
};

export default greetPlayer;
