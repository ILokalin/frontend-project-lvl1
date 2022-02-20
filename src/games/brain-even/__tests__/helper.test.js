import {
  jest,
  describe,
  expect,
  it,
} from '@jest/globals';
import {
  createQuestion,
  initAnswersState,
  showRules,
} from '../helper.js';

describe('brain-even game helper', () => {
  it('initStore shold be increment and return 2', () => {
    const { incrementCounter, getCounter } = initAnswersState();
    incrementCounter();
    incrementCounter();
    expect(getCounter()).toBe(2);
  });
  it('showRules', () => {
    console.log = jest.fn();
    showRules();
    expect(console.log).toHaveBeenCalledWith('Answer "yes" if the number is even, otherwise answer "no".');
  });
  it('createQuestion', () => {
    Math.random = jest.fn(() => 0.5);
    expect(createQuestion()).toEqual({
      number: 50,
      expectedAnswer: 'yes',
    });
  });
});
