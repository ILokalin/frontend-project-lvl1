import { getRandomByRange } from '../../utils.js';
import {
  ANSWERS,
  LIMITS,
} from './constants.js';

// eslint-disable-next-line no-bitwise
export const getNearOdd = (value) => value | 1;

export const getExpectedAnswer = (value) => {
  if (value === 2) return ANSWERS.PRIME;
  if (value % 2 === 0) return ANSWERS.COMPOSITE;

  const getPrime = (divisor) => {
    if (divisor === 1) return ANSWERS.PRIME;
    if (value % divisor === 0) return ANSWERS.COMPOSITE;
    return getPrime(divisor - 2);
  };

  const maxTestLimit = getNearOdd(Math.floor(Math.sqrt(value)));
  return getPrime(maxTestLimit);
};

export const createQuestion = () => {
  const question = getRandomByRange(LIMITS.MIN, LIMITS.MAX);
  return {
    question,
    expectedAnswer: getExpectedAnswer(question),
  };
};
