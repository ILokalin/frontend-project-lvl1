import {
  jest,
  beforeEach,
  describe,
  it,
  expect,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import app from '../index.js';
import { GAME_RESULTS } from '../utils/constants.js';
import * as appConstants from '../constants.js';

const { GAMES } = appConstants;

describe('brain-even processGame', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('should be show congratulation', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    // eslint-disable-next-line no-import-assign
    Object.defineProperty(appConstants, 'APP_SELECTOR', {
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
    Object.defineProperty(appConstants, 'APP_SELECTOR', {
      value: {
        [GAMES.EVEN]: jest.fn().mockReturnValueOnce(GAME_RESULTS.LOSE),
      },
    });
    app(GAMES.EVEN);
    expect(console.log).toHaveBeenLastCalledWith('Let\'s try again, Alex!');
  });
});
