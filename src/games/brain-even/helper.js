import {
  getRandomByRange,
  getNumberType,
} from '../../utils/numbers.js';
import { ANSWERS_VARIANTS } from './constants.js';

export const initAnswersState = () => {
  let correctAnswerCounter = 0;

  const incrementCounter = () => {
    correctAnswerCounter += 1;
    return correctAnswerCounter;
  };

  const getCounter = () => correctAnswerCounter;

  return {
    incrementCounter,
    getCounter,
  };
};

export const createQuestion = () => {
  const number = getRandomByRange(0, 100);

  return {
    number,
    expectedAnswer: ANSWERS_VARIANTS[getNumberType(number)],
  };
};
