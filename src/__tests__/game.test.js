import {
  jest,
  beforeEach,
  describe,
  it,
  expect,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import runGame from '../game.js';
import * as brainEven from '../games/brain-even.js';
import {
  ANSWER_COUNT,
  GAME_RESULTS,
  questionMsg,
  wrongMsg,
} from '../constants.js';

describe('brain-even runGame', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('runGame should be return WIN with correct answers', () => {
    // eslint-disable-next-line
    brainEven["createQuestion"] = jest.fn()
      .mockReturnValueOnce({ question: 34, expectedAnswer: 'yes' })
      .mockReturnValueOnce({ question: 1, expectedAnswer: 'no' })
      .mockReturnValueOnce({ question: 52, expectedAnswer: 'yes' });
    readlineSync.question = jest.fn()
      .mockReturnValueOnce('yes')
      .mockReturnValueOnce('no')
      .mockReturnValueOnce('yes');

    expect(runGame(ANSWER_COUNT.START, ANSWER_COUNT.LIMIT, {
      createQuestion: brainEven.createQuestion,
      rulesMsg: brainEven.rulesMsg,
    }))
      .toBe(GAME_RESULTS.WIN);
    expect(console.log.mock.calls).toEqual([
      ['Answer "yes" if the number is even, otherwise answer "no".'],
      [questionMsg, 34],
      ['Correct!'],
      [questionMsg, 1],
      ['Correct!'],
      [questionMsg, 52],
      ['Correct!'],
    ]);
  });
  it('processGame should be return LOSE with incorrect answers', () => {
    // eslint-disable-next-line
    brainEven["createQuestion"] = jest.fn()
      .mockReturnValueOnce({ question: 5, expectedAnswer: 'no' })
      .mockReturnValueOnce({ question: 10, expectedAnswer: 'yes' })
      .mockReturnValueOnce({ question: 52, expectedAnswer: 'yes' });
    readlineSync.question = jest.fn()
      .mockReturnValueOnce('no')
      .mockReturnValueOnce('yes')
      .mockReturnValueOnce('no');

    expect(runGame(ANSWER_COUNT.START, ANSWER_COUNT.LIMIT, {
      createQuestion: brainEven.createQuestion,
      rulesMsg: brainEven.rulesMsg,
    }))
      .toBe(GAME_RESULTS.LOSE);
    expect(console.log.mock.calls).toEqual([
      ['Answer "yes" if the number is even, otherwise answer "no".'],
      [questionMsg, 5],
      ['Correct!'],
      [questionMsg, 10],
      ['Correct!'],
      [questionMsg, 52],
      [wrongMsg, 'no', 'yes'],
    ]);
  });
});
