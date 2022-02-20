import {
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import readlineSync from 'readline-sync';
import {
  getName,
  getAnswer,
  showCangrat,
  showBy,
  showWrong,
  showGreeting,
  showPrompt,
  showQuestion,
} from '../console.js';

describe('console utils', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('showGreeting', () => {
    showGreeting('John');
    expect(console.log).toHaveBeenCalledWith('Hello, John');
  });
  it('showPrompt', () => {
    showPrompt();
    expect(console.log).toHaveBeenCalledWith('Welcome to the Brain Games!');
  });
  it('showQuestion', () => {
    showQuestion(67);
    expect(console.log).toHaveBeenCalledWith('Question: 67');
  });
  it('showCangrat', () => {
    showCangrat('Bill');
    expect(console.log).toHaveBeenCalledWith('Congratulations, Bill!');
  });
  it('showWrong', () => {
    showWrong('yes', 'no');
    expect(console.log).toHaveBeenCalledWith('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
  });
  it('showBy', () => {
    showBy('Bill');
    expect(console.log).toHaveBeenCalledWith('Let\'s try again, Bill!');
  });
  it('getName', () => {
    readlineSync.question = jest.fn(() => 'Egor');
    expect(getName()).toBe('Egor');
    expect(readlineSync.question).toHaveBeenCalledWith('May I have your name? ');
  });
  it('getAnswer', () => {
    readlineSync.question = jest.fn(() => 'yes');
    expect(getAnswer()).toBe('yes');
    expect(readlineSync.question).toHaveBeenCalledWith('Your answer: ');
  });
});
