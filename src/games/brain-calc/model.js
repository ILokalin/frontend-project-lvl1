import { createQuestion } from './helper.js';
import { CORRECT_ANSWER_COUNTER_LIMIT, rulesMsg } from './constants.js';

const getOptions = () => [createQuestion, CORRECT_ANSWER_COUNTER_LIMIT, rulesMsg];

export default getOptions;
