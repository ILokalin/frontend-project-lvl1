const initAnswersStore = () => {
  let correctAnswerCounter = 0;

  const incrementCounter = () => {
    correctAnswerCounter += 1;
    return correctAnswerCounter;
  };

  const getCounter = () => correctAnswerCounter;

  return {
    incrementCounter,
    getCounter,
  };
};

export default initAnswersStore;
