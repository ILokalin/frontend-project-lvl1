import {
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import {
  getRandomByRange,
} from '../index.js';

const RANDOM = Object.freeze({
  MIN: 0,
  MAX: 0.999999999,
});

describe('number utils', () => {
  describe('getRandomByRange', () => {
    it('should be return low limit', () => {
      Math.random = jest.fn(() => RANDOM.MIN);
      expect(getRandomByRange(4, 9)).toBe(4);
    });
    it('should be return up limit', () => {
      Math.random = jest.fn(() => RANDOM.MAX);
      expect(getRandomByRange(4, 78)).toBe(78);
    });
    it('should be return between of limit', () => {
      Math.random = jest.fn(() => 0.5);
      expect(getRandomByRange(0, 32)).toBe(16);
    });
  });
});
