import {
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import * as utils from '../../utils.js';
import getOptions, {
  createQuestion,
  getSequence,
  rulesMsg,
} from '../brain-progression.js';

describe('brain-progression', () => {
  const { createQuestion: testCreateQuestion, rulesMsg: rules } = getOptions();
  it('createQuestion by brainProgression', () => {
    // eslint-disable-next-line no-import-assign
    utils.getRandomByRange = jest.fn()
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);
    expect(testCreateQuestion()).toEqual({
      question: '20 22 24 .. 28',
      expectedAnswer: '26',
    });
  });
  it('should be message of brainProgression game', () => {
    expect(rules).toBe(rulesMsg);
  });

  it('getSequence', () => {
    // eslint-disable-next-line no-import-assign
    utils.getRandomByRange = jest.fn()
      .mockReturnValueOnce(30)
      .mockReturnValueOnce(7)
      .mockReturnValueOnce(5);
    expect(getSequence()).toEqual([30, 35, 40, 45, 50, 55, 60]);
  });
  it('createQuestion', () => {
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
});
