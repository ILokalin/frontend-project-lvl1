import { createQuestion } from './helper.js';
import {
  showQuestion,
  showWrong,
  getAnswer,
  showMessage,
  showMessageByCondition,
} from '../../utils/console.js';
import { GAME_RESULTS } from '../../constants.js';
import { CORRECT_ANSWER_COUNTER_LIMIT } from './constants.js';
import { correctMsg } from '../../utils/messages.js';
import { ruleMsg } from './messages.js';

const runGame = (answersStore) => {
  const { number, expectedAnswer } = createQuestion();
  const { incrementCounter, getCounter } = answersStore;
  const isFirstRun = getCounter() === 0;
  showMessageByCondition(isFirstRun, ruleMsg);
  showQuestion(number);
  const answer = getAnswer();

  if (answer.toLowerCase() !== expectedAnswer) {
    showWrong(answer, expectedAnswer);
    return GAME_RESULTS.LOSE;
  }

  incrementCounter();
  showMessage(correctMsg);
  if (getCounter() < CORRECT_ANSWER_COUNTER_LIMIT) {
    return runGame(answersStore);
  }

  return GAME_RESULTS.WIN;
};

export default runGame;
