import readlineSync from 'readline-sync';

export const getRandomByRange = (n, m) => {
  const min = Math.min(n, m);
  const range = Math.abs(n - m);
  return Math.round(Math.random() * range + min);
};

export const showMessageByCondition = (message) => {
  if (message) {
    console.log(message);
  }
};

export const getConsole = (message) => readlineSync.question(message);
