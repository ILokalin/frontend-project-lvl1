import getOptions from './model.js';
import runGame from './game.js';
import {
  FINAL_TYPES,
  CORRECT_ANSWER_COUNTER_LIMIT,
  START_ANSWER_COUNT,
} from './constants.js';
import greetPlayer from './cli.js';

const app = (game) => {
  const name = greetPlayer();
  const gameResult = runGame(START_ANSWER_COUNT, CORRECT_ANSWER_COUNTER_LIMIT, ...getOptions(game));
  FINAL_TYPES[gameResult](name);
};

export default app;
