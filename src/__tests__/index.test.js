import {
  jest,
  beforeEach,
  describe,
  it,
  expect,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import * as runGame from '../game.js';
import app from '../index.js';
import { GAMES } from '../model.js';
import { GAME_RESULTS } from '../constants.js';

describe('brain-even processGame', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('should be show congratulation', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    // eslint-disable-next-line no-import-assign
    runGame.default = jest.fn().mockReturnValueOnce(GAME_RESULTS.WIN);
    app(GAMES.EVEN);
    expect(console.log).toHaveBeenLastCalledWith('Congratulations, Alex!');
  });
  it('should by show leave message', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    // eslint-disable-next-line no-import-assign
    runGame.default = jest.fn().mockReturnValueOnce(GAME_RESULTS.LOSE);
    app(GAMES.EVEN);
    expect(console.log).toHaveBeenLastCalledWith('Let\'s try again, Alex!');
  });
});
