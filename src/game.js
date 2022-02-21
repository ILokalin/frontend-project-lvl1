import {
  getAnswer,
  showMessage,
  showMessageByCondition,
  showQuestion,
  showWrong,
} from './utils/console.js';
import { GAME_RESULTS } from './constants.js';
import { correctMsg } from './utils/messages.js';

const runGame = (store, limit, createQuestion, rulesMsg = '') => {
  const { question, expectedAnswer } = createQuestion();
  const { incrementCounter, getCounter } = store;
  showMessageByCondition(rulesMsg, rulesMsg);

  showQuestion(question);
  const answer = getAnswer().toLowerCase();

  if (answer !== expectedAnswer) {
    showWrong(answer, expectedAnswer);
    return GAME_RESULTS.LOSE;
  }

  incrementCounter();
  showMessage(correctMsg);
  if (getCounter() < limit) {
    return runGame(store, limit, createQuestion);
  }

  return GAME_RESULTS.WIN;
};

export default runGame;
