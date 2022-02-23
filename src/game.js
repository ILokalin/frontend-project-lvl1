import { getConsole, showMessageByCondition } from './utils.js';
import {
  GAME_RESULTS,
  correctMsg,
  getAnswerMsg,
  questionMsg,
  wrongMsg,
} from './constants.js';

const runGame = (correctAnswers, limit, { createQuestion, rulesMsg = '' }) => {
  const { question, expectedAnswer } = createQuestion();
  showMessageByCondition(rulesMsg);
  console.log(questionMsg, question);
  const answer = getConsole(getAnswerMsg).toLowerCase();

  if (answer !== expectedAnswer) {
    console.log(wrongMsg, answer, expectedAnswer);
    return GAME_RESULTS.LOSE;
  }

  console.log(correctMsg);
  if (correctAnswers < limit) {
    return runGame(correctAnswers + 1, limit, { createQuestion });
  }

  return GAME_RESULTS.WIN;
};

export default runGame;
