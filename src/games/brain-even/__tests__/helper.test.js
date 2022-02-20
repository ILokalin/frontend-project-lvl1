import {
  jest,
  describe,
  expect,
  it,
} from '@jest/globals';
import {
  createQuestion,
  initAnswersState,
} from '../helper.js';

describe('brain-even game helper', () => {
  it('initStore should be increment and return 2', () => {
    const { incrementCounter, getCounter } = initAnswersState();
    incrementCounter();
    incrementCounter();
    expect(getCounter()).toBe(2);
  });
  it('createQuestion', () => {
    Math.random = jest.fn(() => 0.5);
    expect(createQuestion()).toEqual({
      number: 50,
      expectedAnswer: 'yes',
    });
  });
});
