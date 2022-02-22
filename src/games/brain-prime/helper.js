import { getRandomByRange } from '../../utils/index.js';
import {
  ANSWERS,
  LIMITS,
} from './constants.js';

export const getExpectedAnswer = (value) => {
  if (value === 2) return ANSWERS.PRIME;
  if (value % 2 === 0) return ANSWERS.COMPOSITE;

  const getPrime = (divisor) => {
    if (divisor === 1) return ANSWERS.PRIME;
    if (value % divisor === 0) return ANSWERS.COMPOSITE;
    return getPrime(divisor - 2);
  };
  // eslint-disable-next-line no-bitwise
  const maxTestValue = Math.floor(Math.sqrt(value)) | 1;
  return getPrime(maxTestValue);
};

export const createQuestion = () => {
  const question = getRandomByRange(LIMITS.MIN, LIMITS.MAX);
  return {
    question,
    expectedAnswer: getExpectedAnswer(question),
  };
};
