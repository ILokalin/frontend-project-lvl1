import {
  describe,
  expect,
  it, jest,
} from '@jest/globals';
import getOptions from '../model.js';
import { rulesMsg } from '../constants.js';
import * as utils from '../../../utils/index.js';

describe('brainGCD model', () => {
  const [createQuestion, rules] = getOptions();
  it('createQuestion by brainGCD', () => {
    // eslint-disable-next-line no-import-assign
    utils.getRandomByRange = jest.fn()
      .mockReturnValueOnce(25)
      .mockReturnValueOnce(50);
    expect(createQuestion()).toEqual({
      question: '25 50',
      expectedAnswer: '25',
    });
  });
  it('should be message of brainGCD game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
