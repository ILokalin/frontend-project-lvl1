import { getRandomByRange } from '../../utils/numbers.js';
import { LIMITS } from './constants.js';

export const getGreatestCommonDivisor = (a, b) => {
  if (a === 0 || b === 0) {
    return (a + b).toString();
  }
  if (a < b) {
    return getGreatestCommonDivisor(b, a);
  }
  return getGreatestCommonDivisor(a % b, b);
};

export const createQuestion = () => {
  const a = getRandomByRange(LIMITS.MIN, LIMITS.MAX);
  const b = getRandomByRange(LIMITS.MIN, LIMITS.MAX);
  const expectedAnswer = getGreatestCommonDivisor(a, b);
  return {
    question: `${a} ${b}`,
    expectedAnswer,
  };
};
