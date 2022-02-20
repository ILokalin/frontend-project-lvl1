export const getFloatRandom = (n, m) => {
  const min = Math.min(n, m);
  const range = Math.abs(n - m);
  return Math.random() * range + min;
};

export const getRandomEven = (min, max) => Math.round(getFloatRandom(min, max) / 2) * 2;

export const getRandomByRange = (min, max) => Math.round(getFloatRandom(min, max));
