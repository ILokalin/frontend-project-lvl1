import { getRandomByRange } from '../../utils/index.js';
import {
  ANSWERS,
  NUMBER_TYPES,
} from './constants.js';

export const getNumberType = (value) => NUMBER_TYPES.get(value % 2);

export const createQuestion = () => {
  const question = getRandomByRange(0, 100);

  return {
    question,
    expectedAnswer: ANSWERS[getNumberType(question)],
  };
};
