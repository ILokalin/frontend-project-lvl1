import {
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import greetPlayer from '../cli.js';

describe('brain-even processGame', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('should be show congratulation', () => {
    readlineSync.question = jest.fn().mockReturnValue('Alex');
    greetPlayer();
    expect(console.log.mock.calls).toEqual([
      ['Welcome to the Brain Games!'],
      ['Hello,', 'Alex'],
    ]);
  });
});
