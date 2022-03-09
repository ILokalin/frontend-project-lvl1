import { getRandomByRange } from '../utils.js';

export const OPERATORS = ['-', '+', '*'];
const [MINUS, PLUS, MULTI] = OPERATORS;

export const rulesMsg = 'What is the result of the expression?';
export const errorMsg = 'Abnormal operator. Sorry.';

export const getRandomOperator = () => {
  const operatorIndex = getRandomByRange(0, 2);
  return OPERATORS[operatorIndex];
};

export const getExpression = (a, b, operator) => `${a} ${operator} ${b}`;
export const computeAnswer = (operator, a, b) => {
  switch (operator) {
    case MINUS:
      return a - b;
    case PLUS:
      return a + b;
    case MULTI:
      return a * b;
    default:
      return errorMsg;
  }
};

export const createQuestion = () => {
  const a = getRandomByRange(0, 100);
  const b = getRandomByRange(1, 100);
  const operator = getRandomOperator();

  return {
    question: getExpression(a, b, operator),
    expectedAnswer: computeAnswer(operator, a, b).toString(),
  };
};

const getOptions = () => ({ createQuestion, rulesMsg });

export default getOptions;
