import {
  describe,
  expect,
  it,
} from '@jest/globals';
import getOptions from '../model.js';
import { rulesMsg } from '../constants.js';

describe('brainCalc model', () => {
  const { createQuestion, rulesMsg: rules } = getOptions();
  it('createQuestion by brainCalc', () => {
    expect(createQuestion()).toEqual(
      expect.objectContaining({
        question: expect.any(String),
        expectedAnswer: expect.any(String),
      }),
    );
  });
  it('should be message of brainCalc game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
