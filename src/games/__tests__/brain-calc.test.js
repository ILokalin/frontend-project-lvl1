import {
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import getOptions, {
  computeAnswer,
  createQuestion,
  errorMsg,
  getExpression,
  getRandomOperator,
  rulesMsg,
} from '../brain-calc.js';

describe('brain-calc', () => {
  it('should be compute minus expression', () => {
    expect(computeAnswer('-', 9, 3)).toBe(6);
  });
  it('should be compute plus expression', () => {
    expect(computeAnswer('+', 9, 3)).toBe(12);
  });
  it('should be compute multi expression', () => {
    expect(computeAnswer('*', 9, 3)).toBe(27);
  });
  it('should be return error msg', () => {
    expect(computeAnswer('/', 9, 3)).toBe(errorMsg);
  });

  describe('createQuestion options', () => {
    const { createQuestion: testCreateQuestion, rulesMsg: rules } = getOptions();
    it('should be contain question and answer', () => {
      expect(testCreateQuestion()).toEqual(
        expect.objectContaining({
          question: expect.any(String),
          expectedAnswer: expect.any(String),
        }),
      );
    });
    it('should be message of brainCalc game', () => {
      expect(rules).toBe(rulesMsg);
    });
  });

  describe('getRandomOperator', () => {
    const randomSpy = jest.fn();
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
