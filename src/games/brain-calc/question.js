import { getRandomByRange } from '../../utils.js';
import { EXPRESSIONS, OPERATORS } from './constants.js';

export const getRandomOperator = () => {
  const randomIndex = getRandomByRange(0, 2);

  return Object.values(OPERATORS)[randomIndex];
};

export const getExpression = (a, b, operator) => `${a} ${operator} ${b}`;

export const createQuestion = () => {
  const a = getRandomByRange(0, 100);
  const b = getRandomByRange(1, 100);
  const operator = getRandomOperator();

  return {
    question: getExpression(a, b, operator),
    expectedAnswer: EXPRESSIONS[operator](a, b).toString(),
  };
};
