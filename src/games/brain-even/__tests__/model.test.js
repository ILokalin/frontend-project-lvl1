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

describe('brainEven model', () => {
  const [createQuestion, limit, rules] = getOptions();
  it('createQuestion by brainEven', () => {
    Math.random = jest.fn(() => 0.5);
    expect(createQuestion()).toEqual({
      question: 50,
      expectedAnswer: 'yes',
    });
  });
  it('should be equal limit', () => {
    expect(limit).toBe(CORRECT_ANSWER_COUNTER_LIMIT);
  });
  it('should be message of brainEven game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
