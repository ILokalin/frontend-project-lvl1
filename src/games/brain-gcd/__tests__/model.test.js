import {
  describe,
  expect,
  it,
} from '@jest/globals';
import getOptions from '../model.js';
import { rulesMsg } from '../constants.js';

describe('brainGCD model', () => {
  const [createQuestion, rules] = getOptions();
  it('createQuestion by brainGCD', () => {
    expect(createQuestion()).toEqual(
      expect.objectContaining({
        question: expect.any(String),
        expectedAnswer: expect.any(String),
      }),
    );
  });
  it('should be message of brainGCD game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
