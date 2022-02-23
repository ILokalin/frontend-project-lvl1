import { showMessage } from './utils.js';

export const GAME_RESULTS = Object.freeze({
  WIN: 'WIN',
  LOSE: 'LOSE',
});

export const START_ANSWER_COUNT = 1;
export const CORRECT_ANSWER_COUNTER_LIMIT = 3;

export const correctMsg = 'Correct!';
export const welcomeMsg = 'Welcome to the Brain Games!';
export const greetingMsg = 'Hello, ';
export const questionMsg = 'Question: ';
export const congratulationsMsg = 'Congratulations, %s!';
export const byeMsg = 'Let\'s try again, %s!';
export const wrongMsg = '\'%s\' is wrong answer ;(. Correct answer was \'%s\'.';

export const getNameMsg = 'May I have your name? ';
export const getAnswerMsg = 'Your answer: ';

export const FINAL_TYPES = Object.freeze({
  [GAME_RESULTS.WIN]: (name) => showMessage(congratulationsMsg, name),
  [GAME_RESULTS.LOSE]: (name) => showMessage(byeMsg, name),
});
