export const OPERATORS = Object({
  MINES: '-',
  PLUS: '+',
  MULTI: '*',
});

export const EXPRESSIONS = Object.freeze({
  [OPERATORS.MINES]: (a, b) => a - b,
  [OPERATORS.PLUS]: (a, b) => a + b,
  [OPERATORS.MULTI]: (a, b) => a * b,
});

export const CORRECT_ANSWER_COUNTER_LIMIT = 3;
