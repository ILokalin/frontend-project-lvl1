import readlineSync from 'readline-sync';

export const showMessage = (...args) => console.log(...args);
export const showGreeting = (name) => console.log(`Hello, ${name}`);
export const showPrompt = () => console.log('Welcome to the Brain Games!');
export const showQuestion = (question) => console.log(`Question: ${question}`);
export const showCangrat = (name) => console.log(`Congratulations, ${name}!`);
export const showBy = (name) => console.log(`Let's try again, ${name}!`);
export const showWrong = (answer, expectedAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);

export const getName = () => readlineSync.question('May I have your name? ');
export const getAnswer = () => readlineSync.question('Your answer: ');
