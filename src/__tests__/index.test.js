import {
  jest,
  beforeEach,
  describe,
  it,
  expect,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import * as selector from '../appSelector.js';
import app from '../index.js';
import { GAMES, GAME_RESULTS } from '../constants.js';

describe('brain-even processGame', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('should be show congratulation', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    // eslint-disable-next-line no-import-assign
    Object.defineProperty(selector, 'default', {
      value: {
        [GAMES.EVEN]: jest.fn().mockReturnValueOnce(GAME_RESULTS.WIN),
      },
    });
    app(GAMES.EVEN);
    expect(console.log).toHaveBeenLastCalledWith('Congratulations, Alex!');
  });
  it('should by show leave message', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    // eslint-disable-next-line no-import-assign
    Object.defineProperty(selector, 'default', {
      value: {
        [GAMES.EVEN]: jest.fn().mockReturnValueOnce(GAME_RESULTS.LOSE),
      },
    });
    app(GAMES.EVEN);
    expect(console.log).toHaveBeenLastCalledWith('Let\'s try again, Alex!');
  });
});
