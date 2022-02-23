import getOptions from './model.js';
import runGame from './game.js';
import {
  FINAL_TYPES,
  ANSWER_COUNT,
} from './constants.js';
import greetPlayer from './cli.js';

const app = (game) => {
  const name = greetPlayer();
  const gameResult = runGame(ANSWER_COUNT.START, ANSWER_COUNT.LIMIT, getOptions(game));
  FINAL_TYPES[gameResult](name);
};

export default app;
