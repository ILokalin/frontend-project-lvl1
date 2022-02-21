import { describe, expect, it } from '@jest/globals';
import initStore from '../store.js';

describe('store', () => {
  it('initStore should be increment answers counter and return 2', () => {
    const { incrementCounter, getCounter } = initStore();
    incrementCounter();
    incrementCounter();
    expect(getCounter()).toBe(2);
  });
});
