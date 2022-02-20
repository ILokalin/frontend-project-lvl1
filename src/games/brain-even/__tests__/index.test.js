import {
  jest,
  beforeEach,
  describe,
  it,
  expect,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import * as Game from '../processGame.js';
import app from '../index.js';
import { GAME_RESULTS } from '../../../utils/constants.js';

describe('brain-even processGame', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('should be show congratulation', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    // eslint-disable-next-line
    Game["processGame"] = jest.fn().mockReturnValueOnce(GAME_RESULTS.WIN);
    app();
    expect(console.log).toHaveBeenLastCalledWith('Congratulations, Alex!');
  });
  it('shold by show By message', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    // eslint-disable-next-line
    Game["processGame"] = jest.fn().mockReturnValueOnce(GAME_RESULTS.LOSE);
    app();
    expect(console.log).toHaveBeenLastCalledWith('Let\'s try again, Alex!');
  });
});
