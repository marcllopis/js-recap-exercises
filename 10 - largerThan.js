// create a function largerThan that will receive 2 numbers as parameters and return the largest number only

const largerThan = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else {
    return secondNumber;
  }
};

console.log(largerThan(100, 130));
