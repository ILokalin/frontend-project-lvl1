import {
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import {
  getRandomByRange,
  getConsole,
  showMessageByCondition,
} from '../utils.js';

const RANDOM = Object.freeze({
  MIN: 0,
  MAX: 0.999999999,
});

describe('number utils', () => {
  beforeEach(() => {
    console.log = jest.fn();
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
  it('getConsole should type message and receive value', () => {
    readlineSync.question = jest.fn(() => 'Egor');
    expect(getConsole('sample message')).toBe('Egor');
    expect(readlineSync.question).toHaveBeenCalledWith('sample message');
  });
  describe('showMessageByCondition', () => {
    it('should be show messages', () => {
      showMessageByCondition('Hello world');
      expect(console.log).toHaveBeenCalledWith('Hello world');
    });
    it('showMessageByCondition should be ignore messages', () => {
      showMessageByCondition('');
      expect(console.log).toHaveBeenCalledTimes(0);
    });
  });
});
