import {
  describe,
  expect,
  it, jest,
} from '@jest/globals';
import * as utils from '../../../utils.js';
import {
  createQuestion,
  getGreatestCommonDivisor,
} from '../question.js';

describe('brain-gcd helper', () => {
  describe('getGreatestCommonDivisor', () => {
    it('should be return 25', () => {
      expect(getGreatestCommonDivisor(25, 50)).toBe('25');
    });
    it('should be return 4', () => {
      expect(getGreatestCommonDivisor(100, 52)).toBe('4');
    });
    it('should be return 3', () => {
      expect(getGreatestCommonDivisor(3, 9)).toBe('3');
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
