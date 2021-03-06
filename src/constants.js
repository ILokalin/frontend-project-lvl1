export const GAME_RESULTS = Object.freeze({
  WIN: 'WIN',
  LOSE: 'LOSE',
});

export const ANSWER_COUNT = Object.freeze({
  START: 1,
  LIMIT: 3,
});

export const correctMsg = 'Correct!';
export const welcomeMsg = 'Welcome to the Brain Games!';
export const greetingMsg = 'Hello,';
export const questionMsg = 'Question:';
export const congratulationsMsg = 'Congratulations, %s!';
export const byeMsg = 'Let\'s try again, %s!';
export const wrongMsg = '\'%s\' is wrong answer ;(. Correct answer was \'%s\'.';

export const getNameMsg = 'May I have your name? ';
export const getAnswerMsg = 'Your answer: ';

export const FINAL_TYPES = Object.freeze({
  [GAME_RESULTS.WIN]: (name) => console.log(congratulationsMsg, name),
  [GAME_RESULTS.LOSE]: (name) => console.log(byeMsg, name),
});
