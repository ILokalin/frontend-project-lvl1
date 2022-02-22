import {
  describe,
  expect,
  it,
} from '@jest/globals';
import getOptions from '../model.js';
import { rulesMsg } from '../constants.js';

describe('brainGCD model', () => {
  const [createQuestion, rules] = getOptions();
  it('createQuestion containt question and answer', () => {
    expect(createQuestion()).toEqual(
      expect.objectContaining({
        question: expect.any(Number),
        expectedAnswer: expect.any(String),
      }),
    );
  });
  it('should be message of brainGCD game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
