import {
  describe,
  expect,
  it,
} from '@jest/globals';
import {
  EXPRESSIONS,
  OPERATORS,
} from '../constants.js';

describe('brainCalc constants', () => {
  it('should be compute minus expression', () => {
    expect(EXPRESSIONS[OPERATORS.MINUS](9, 3)).toBe(6);
  });
  it('should be compute plus expression', () => {
    expect(EXPRESSIONS[OPERATORS.PLUS](9, 3)).toBe(12);
  });
  it('should be compute multi expression', () => {
    expect(EXPRESSIONS[OPERATORS.MULTI](9, 3)).toBe(27);
  });
});
