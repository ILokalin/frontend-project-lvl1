import {
  describe,
  expect,
  it,
} from '@jest/globals';
import getOptions from '../model.js';
import { rulesMsg } from '../constants.js';

describe('brainEven model', () => {
  const { createQuestion, rulesMsg: rules } = getOptions();
  it('createQuestion by brainEven', () => {
    expect(createQuestion()).toEqual(
      expect.objectContaining({
        question: expect.any(Number),
        expectedAnswer: expect.any(String),
      }),
    );
  });
  it('should be message of brainEven game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
