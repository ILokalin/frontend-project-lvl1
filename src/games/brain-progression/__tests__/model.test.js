import {
  describe,
  expect,
  it, jest,
} from '@jest/globals';
import getOptions from '../model.js';
import { rulesMsg } from '../constants.js';
import * as utils from '../../../utils/index.js';

describe('brainProgression model', () => {
  const [createQuestion, rules] = getOptions();
  it('createQuestion by brainProgression', () => {
    // eslint-disable-next-line no-import-assign
    utils.getRandomByRange = jest.fn()
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);
    expect(createQuestion()).toEqual({
      question: '20 22 24 .. 28',
      expectedAnswer: '26',
    });
  });
  it('should be message of brainProgression game', () => {
    expect(rules).toBe(rulesMsg);
  });
});
