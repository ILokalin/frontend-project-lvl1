import { getRandomByRange } from '../../utils/numbers.js';
import {
  DIFFERENTS_LIMIT,
  LIMITS,
  SEQUENCE_LENGTH_LIMIT,
} from './constants.js';

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
