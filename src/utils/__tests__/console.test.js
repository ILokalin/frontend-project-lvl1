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
  showCongratulation,
  showBy,
  showWrong,
  showGreeting,
  showPrompt,
  showQuestion,
  showMessageByCondition,
  showMessage,
} from '../console.js';

describe('console utils', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('showMessage', () => {
    showMessage('hello', 'John');
    expect(console.log).toHaveBeenCalledWith('hello', 'John');
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
    showCongratulation('Bill');
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
  it('showMessageByCondition should be show messages', () => {
    showMessageByCondition(true, 'Hello', 'world');
    expect(console.log).toHaveBeenCalledWith('Hello', 'world');
  });
  it('showMessageByCondition should be ignore messages', () => {
    showMessageByCondition(false, 'Hello', 'world');
    expect(console.log).toHaveBeenCalledTimes(0);
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
