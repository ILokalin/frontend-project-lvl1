import {
  getRandomByRange,
} from '../utils.js';

export const LIMITS = Object.freeze({
  MIN: 0,
  MAX: 500,
});

export const rulesMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const PRIME = 'PRIME';
export const COMPOSITE = 'COMPOSITE';
export const ANSWERS = Object.freeze({
  [PRIME]: 'yes',
  [COMPOSITE]: 'no',
});

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

const getOptions = () => ({ createQuestion, rulesMsg });

export default getOptions;
