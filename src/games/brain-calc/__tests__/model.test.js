import {
  describe,
  expect,
  it, jest,
} from '@jest/globals';
import getOptions from '../model.js';
import {
  CORRECT_ANSWER_COUNTER_LIMIT,
  rulesMsg,
} from '../constants.js';

describe('brainCalc model', () => {
  const [createQuestion, limit, rules] = getOptions();
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
  it('should be equal limit', () => {
    expect(limit).toBe(CORRECT_ANSWER_COUNTER_LIMIT);
  });
  it('should be message of brainCalc game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
