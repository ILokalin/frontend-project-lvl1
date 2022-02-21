import {
  jest,
  beforeEach,
  describe,
  it,
  expect,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import runGame from '../game.js';
import * as helper from '../games/brain-even/helper.js';
import {
  CORRECT_ANSWER_COUNTER_LIMIT,
  GAME_RESULTS,
} from '../constants.js';
import initStore from '../store.js';
import getOptions from '../games/brain-even/model.js';

describe('brain-even runGame', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('runGame should be return WIN with correct answers', () => {
    // eslint-disable-next-line
    helper["createQuestion"] = jest.fn()
      .mockReturnValueOnce({ question: 34, expectedAnswer: 'yes' })
      .mockReturnValueOnce({ question: 1, expectedAnswer: 'no' })
      .mockReturnValueOnce({ question: 52, expectedAnswer: 'yes' });
    readlineSync.question = jest.fn()
      .mockReturnValueOnce('yes')
      .mockReturnValueOnce('no')
      .mockReturnValueOnce('yes');
    const state = initStore();

    expect(runGame(state, CORRECT_ANSWER_COUNTER_LIMIT, ...getOptions())).toBe(GAME_RESULTS.WIN);
    expect(state.getCounter()).toBe(3);
    expect(console.log.mock.calls).toEqual([
      ['Answer "yes" if the number is even, otherwise answer "no".'],
      ['Question: 34'],
      ['Correct!'],
      ['Question: 1'],
      ['Correct!'],
      ['Question: 52'],
      ['Correct!'],
    ]);
  });
  it('processGame should be return LOSE with incorrect answers', () => {
    // eslint-disable-next-line
    helper["createQuestion"] = jest.fn()
      .mockReturnValueOnce({ question: 5, expectedAnswer: 'no' })
      .mockReturnValueOnce({ question: 10, expectedAnswer: 'yes' })
      .mockReturnValueOnce({ question: 52, expectedAnswer: 'yes' });
    readlineSync.question = jest.fn()
      .mockReturnValueOnce('no')
      .mockReturnValueOnce('yes')
      .mockReturnValueOnce('no');
    const state = initStore();

    expect(runGame(state, CORRECT_ANSWER_COUNTER_LIMIT, ...getOptions())).toBe(GAME_RESULTS.LOSE);
    expect(state.getCounter()).toBe(2);
    expect(console.log.mock.calls).toEqual([
      ['Answer "yes" if the number is even, otherwise answer "no".'],
      ['Question: 5'],
      ['Correct!'],
      ['Question: 10'],
      ['Correct!'],
      ['Question: 52'],
      ['\'no\' is wrong answer ;(. Correct answer was \'yes\'.'],
    ]);
  });
});
