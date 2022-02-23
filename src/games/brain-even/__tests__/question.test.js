import {
  jest,
  describe,
  expect,
  it,
} from '@jest/globals';
import {
  createQuestion,
  getNumberType,
} from '../question.js';

describe('brain-even game helper', () => {
  it('createQuestion', () => {
    Math.random = jest.fn(() => 0.5);
    expect(createQuestion()).toEqual({
      question: 50,
      expectedAnswer: 'yes',
    });
  });
  describe('getNumberType', () => {
    it('should be return even', () => {
      expect(getNumberType(48)).toBe('EVEN');
    });
    it('should be return odd', () => {
      expect(getNumberType(53)).toBe('ODD');
    });
  });
});
