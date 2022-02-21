import {
  jest,
  describe,
  expect,
  it,
} from '@jest/globals';
import {
  createQuestion,
  getExpression,
  getRandomOperator,
} from '../helper.js';

describe('brainCalc helper', () => {
  const randomSpy = jest.fn();

  describe('getRandomOperator', () => {
    it('should be return -', () => {
      Math.random = randomSpy.mockReturnValueOnce(0);
      expect(getRandomOperator()).toBe('-');
    });
    it('should be return +', () => {
      Math.random = randomSpy.mockReturnValueOnce(0.5);
      expect(getRandomOperator()).toBe('+');
    });
    it('should be return *', () => {
      Math.random = randomSpy.mockReturnValueOnce(0.9999999);
      expect(getRandomOperator()).toBe('*');
    });
  });
  it('getExpression', () => {
    expect(getExpression(45, 78, '+')).toBe('45 + 78');
  });
  it('createQuestion', () => {
    Math.random = jest.fn()
      .mockReturnValueOnce(0.43)
      .mockReturnValueOnce(0.23)
      .mockReturnValueOnce(0);
    const question = createQuestion();
    expect(question).toEqual({
      question: '43 - 24',
      expectedAnswer: '19',
    });
  });
});
