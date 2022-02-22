// eslint-disable-next-line import/prefer-default-export
export const getRandomByRange = (n, m) => {
  const min = Math.min(n, m);
  const range = Math.abs(n - m);
  return Math.round(Math.random() * range + min);
};
