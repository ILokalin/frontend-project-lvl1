import {
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import getOptions, {
  createQuestion,
  getNumberType,
  rulesMsg,
} from '../brain-even.js';

describe('brain-even', () => {
  it('createQuestion', () => {
    Math.random = jest.fn(() => 0.5);
    expect(createQuestion()).toEqual({
      question: 50,
      expectedAnswer: 'yes',
    });
  });

  describe('getNumberType', () => {
    it('should be return even', () => {
      expect(getNumberType(48)).toBe('yes');
    });
    it('should be return odd', () => {
      expect(getNumberType(53)).toBe('no');
    });
  });

  describe('brainEven model', () => {
    const { createQuestion: testCreateQuestion, rulesMsg: rules } = getOptions();
    it('createQuestion', () => {
      expect(testCreateQuestion()).toEqual(
        expect.objectContaining({
          question: expect.any(Number),
          expectedAnswer: expect.any(String),
        }),
      );
    });
    it('should be message of brainEven game', () => {
      expect(rules).toBe(rulesMsg);
    });
  });
});
