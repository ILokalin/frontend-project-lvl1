import {
  getRandomByRange,
} from '../utils.js';

export const SEQUENCE_LENGTH_LIMIT = Object.freeze({
  MIN: 5,
  MAX: 10,
});

export const DIFFERENTS_LIMIT = Object.freeze({
  MIN: 1,
  MAX: 15,
});

export const LIMITS = Object.freeze({
  MIN: -50,
  MAX: 200,
});

export const rulesMsg = 'What number is missing in the progression?';

export const getSequence = () => {
  const sequence = [];
  const startItem = getRandomByRange(LIMITS.MIN, LIMITS.MAX);
  const length = getRandomByRange(SEQUENCE_LENGTH_LIMIT.MIN, SEQUENCE_LENGTH_LIMIT.MAX);
  const diff = getRandomByRange(DIFFERENTS_LIMIT.MIN, DIFFERENTS_LIMIT.MAX);

  const pushItem = (currentItem, tail) => {
    if (!tail) {
      return;
    }
    sequence.push(currentItem);
    pushItem(currentItem + diff, tail - 1);
  };

  pushItem(startItem, length);
  return sequence;
};

export const createQuestion = () => {
  const sequence = getSequence();
  const hiddenPosition = getRandomByRange(0, sequence.length - 1);
  const expectedAnswer = sequence[hiddenPosition].toString();
  sequence[hiddenPosition] = '..';

  return {
    question: sequence.join(' '),
    expectedAnswer,
  };
};

const getOptions = () => ({ createQuestion, rulesMsg });

export default getOptions;
