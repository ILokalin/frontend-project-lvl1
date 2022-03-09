import {
  getRandomByRange,
} from '../utils.js';

export const EVEN = 'yes';
export const ODD = 'no';

export const rulesMsg = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getNumberType = (value) => (value % 2 === 0 ? EVEN : ODD);

export const createQuestion = () => {
  const question = getRandomByRange(0, 100);

  return {
    question,
    expectedAnswer: getNumberType(question),
  };
};

const getOptions = () => ({ createQuestion, rulesMsg });

export default getOptions;
