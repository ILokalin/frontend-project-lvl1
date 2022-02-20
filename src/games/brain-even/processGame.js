import { createQuestion } from './helper.js';
import {
  showQuestion,
  showWrong,
  getAnswer,
  showMessage,
} from '../../utils/console.js';
import { GAME_RESULTS } from '../../utils/constants.js';
import { CORRECT_ANSWER_COUNTER_LIMIT } from './constants.js';
import { correctMsg } from '../../utils/messages.js';

// eslint-disable-next-line import/prefer-default-export
export const processGame = (answersStore) => {
  const { number, expectedAnswer } = createQuestion();
  const { incrementCounter, getCounter } = answersStore;
  showQuestion(number);
  const answer = getAnswer(number);

  if (answer.toLowerCase() !== expectedAnswer) {
    showWrong(answer, expectedAnswer);
    return GAME_RESULTS.LOSE;
  }

  incrementCounter();
  showMessage(correctMsg);
  // eslint-disable-next-line consistent-return
  if (getCounter() < CORRECT_ANSWER_COUNTER_LIMIT) return processGame(answersStore);

  return GAME_RESULTS.WIN;
};
