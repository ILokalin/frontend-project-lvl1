export const OPERATORS = Object({
  MINUS: '-',
  PLUS: '+',
  MULTI: '*',
});

export const EXPRESSIONS = Object.freeze({
  [OPERATORS.MINUS]: (a, b) => a - b,
  [OPERATORS.PLUS]: (a, b) => a + b,
  [OPERATORS.MULTI]: (a, b) => a * b,
});

export const rulesMsg = 'What is the result of the expression?';
