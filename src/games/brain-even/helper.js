import { getRandomByRange } from '../../utils/numbers.js';
import {
  ANSWERS_VARIANTS,
  NUMBER_TYPES,
} from './constants.js';

export const getNumberType = (value) => NUMBER_TYPES.get(value % 2);

export const createQuestion = () => {
  const number = getRandomByRange(0, 100);

  return {
    number,
    expectedAnswer: ANSWERS_VARIANTS[getNumberType(number)],
  };
};
