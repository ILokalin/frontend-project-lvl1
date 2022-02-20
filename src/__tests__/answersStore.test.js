import { describe, expect, it } from '@jest/globals';
import initAnswersStore from '../answersStore.js';

describe('answersStore', () => {
  it('initStore should be increment and return 2', () => {
    const { incrementCounter, getCounter } = initAnswersStore();
    incrementCounter();
    incrementCounter();
    expect(getCounter()).toBe(2);
  });
});
