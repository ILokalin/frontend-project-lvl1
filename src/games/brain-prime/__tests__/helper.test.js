import {
  describe,
  expect,
  it, jest,
} from '@jest/globals';
import * as utils from '../../../utils.js';
import {
  createQuestion,
  getExpectedAnswer,
  getNearOdd,
} from '../helper.js';

describe('brain-prime helper', () => {
  describe('getNearOdd', () => {
    it('should be correct value to odd', () => {
      expect(getNearOdd(6)).toBe(7);
    });
    it('should be correct without changes', () => {
      expect(getNearOdd(79)).toBe(79);
    });
  });
  describe('getExpectedAnswer', () => {
    it('should be test 2 as prime', () => {
      expect(getExpectedAnswer(2)).toBe('yes');
    });
    it('should be test 3 as prime', () => {
      expect(getExpectedAnswer(3)).toBe('yes');
    });
    it('should be test 17 as prime', () => {
      expect(getExpectedAnswer(17)).toBe('yes');
    });
    it('should be test 11 as prime', () => {
      expect(getExpectedAnswer(11)).toBe('yes');
    });
    it('should be test 31 as prime', () => {
      expect(getExpectedAnswer(31)).toBe('yes');
    });
    it('should be test 21 as composite', () => {
      expect(getExpectedAnswer(21)).toBe('no');
    });
    it('should be test 33 as composite', () => {
      expect(getExpectedAnswer(33)).toBe('no');
    });
  });
  it('createQuestion', () => {
    // eslint-disable-next-line no-import-assign
    utils.getRandomByRange = jest.fn()
      .mockReturnValueOnce(113);
    expect(createQuestion()).toEqual({
      question: 113,
      expectedAnswer: 'yes',
    });
  });
});
