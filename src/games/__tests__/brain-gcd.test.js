import {
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import * as utils from '../../utils.js';
import getOptions, {
  createQuestion,
  getGreatestCommonDivisor,
  rulesMsg,
} from '../brain-gcd.js';

describe('brain-gcd helper', () => {
  it('should be return 25', () => {
    expect(getGreatestCommonDivisor(25, 50)).toBe('25');
  });
  it('should be return 4', () => {
    expect(getGreatestCommonDivisor(100, 52)).toBe('4');
  });
  it('should be return 3', () => {
    expect(getGreatestCommonDivisor(3, 9)).toBe('3');
  });

  describe('brainGCD', () => {
    const { createQuestion: testCreateQuestion, rulesMsg: rules } = getOptions();
    it('createQuestion', () => {
      expect(testCreateQuestion()).toEqual(
        expect.objectContaining({
          question: expect.any(String),
          expectedAnswer: expect.any(String),
        }),
      );
    });
    it('should be message of brainGCD game', () => {
      expect(rules).toBe(rulesMsg);
    });
  });

  it('createQuestion', () => {
    // eslint-disable-next-line no-import-assign
    utils.getRandomByRange = jest.fn()
      .mockReturnValueOnce(25)
      .mockReturnValueOnce(50);
    expect(createQuestion()).toEqual({
      question: '25 50',
      expectedAnswer: '25',
    });
  });
});
