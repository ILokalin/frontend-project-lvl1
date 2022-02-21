import {
  describe,
  expect,
  it, jest,
} from '@jest/globals';
import getOptions from '../model.js';
import { rulesMsg } from '../constants.js';

describe('brainCalc model', () => {
  const [createQuestion, rules] = getOptions();
  it('createQuestion by brainCalc', () => {
    Math.random = jest.fn()
      .mockReturnValueOnce(0.43)
      .mockReturnValueOnce(0.23)
      .mockReturnValueOnce(0);
    const question = createQuestion();
    expect(question).toEqual({
      question: '43 - 24',
      expectedAnswer: '19',
    });
  });
  it('should be message of brainCalc game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
