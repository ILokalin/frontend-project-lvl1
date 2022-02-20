import readlineSync from 'readline-sync';
import {
  getRandomByRange,
  getNumberType,
} from '../../utils/numbers.js';
import { ANSWERS_VARIANTS } from './constants.js';

export const showRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const getAnswer = (questionNumber) => readlineSync.question(`look ${questionNumber}`);

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
