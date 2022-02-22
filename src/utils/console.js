import readlineSync from 'readline-sync';

export const showMessage = (...args) => console.log(...args);
export const showGreeting = (name) => showMessage(`Hello, ${name}`);
export const showQuestion = (question) => showMessage(`Question: ${question}`);
export const showCongratulation = (name) => showMessage(`Congratulations, ${name}!`);
export const showBy = (name) => showMessage(`Let's try again, ${name}!`);
export const showWrong = (answer, expectedAnswer) => showMessage(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);

export const showMessageByCondition = (message) => {
  if (message) {
    showMessage(message);
  }
};

export const getName = () => readlineSync.question('May I have your name? ');
export const getAnswer = () => readlineSync.question('Your answer: ');
