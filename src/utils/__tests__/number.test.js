import {
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import {
  getFloatRandom,
  getRandomEven,
  getRandomByRange,
} from '../numbers.js';

const RANDOM = Object.freeze({
  MIN: 0,
  MAX: 0.999999999,
});

describe('number utils', () => {
  describe('getFloatRandom', () => {
    it('should be return low limit of range', () => {
      Math.random = jest.fn(() => RANDOM.MIN);
      expect(getFloatRandom(5, 9)).toBe(5);
    });
    it('should be return up limit of range', () => {
      Math.random = jest.fn(() => RANDOM.MAX);
      expect(Math.round(getFloatRandom(5, 9))).toBe(9);
    });
    it('should be return result between range. Expect 50', () => {
      Math.random = jest.fn(() => 0.5);
      expect(Math.round(getFloatRandom(0, 100))).toBe(50);
    });
  });
  describe('getRandomEven', () => {
    it('should be return even with low limit even', () => {
      Math.random = jest.fn(() => RANDOM.MIN);
      expect(getRandomEven(4, 9)).toBe(4);
    });
    it('should be return even with odd low limit', () => {
      Math.random = jest.fn(() => RANDOM.MIN);
      expect(getRandomEven(5, 9)).toBe(6);
    });
    it('should be return even with even up limit', () => {
      Math.random = jest.fn(() => RANDOM.MAX);
      expect(getRandomEven(4, 78)).toBe(78);
    });
    it('should be return even with odd up limit', () => {
      Math.random = jest.fn(() => RANDOM.MAX);
      expect(getRandomEven(5, 33)).toBe(32);
    });
  });
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
