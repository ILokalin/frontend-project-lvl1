export const EVEN = 'EVEN';
export const ODD = 'ODD';
export const NUMBER_TYPES = new Map([
  [0, EVEN],
  [1, ODD],
]);

export const ANSWERS = Object.freeze({
  [EVEN]: 'yes',
  [ODD]: 'no',
});

export const rulesMsg = 'Answer "yes" if the number is even, otherwise answer "no".';
