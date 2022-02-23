// eslint-disable-next-line import/prefer-default-export
import readlineSync from 'readline-sync';

export const getRandomByRange = (n, m) => {
  const min = Math.min(n, m);
  const range = Math.abs(n - m);
  return Math.round(Math.random() * range + min);
};

export const showMessage = (...args) => console.log(...args);
export const showMessageByCondition = (message) => {
  if (message) {
    showMessage(message);
  }
};

export const getConsole = (message) => readlineSync.question(message);
