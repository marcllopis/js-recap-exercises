// create a function multiplyWithSum that will multiply between 2 numbers using only the addition operation.

const multiplyWithSum = (firstNumber, secondNumber) => {
  let total = 0;
  for (let i = 0; i < firstNumber; i++) {
    total = total + secondNumber;
  }
  return total;
};
console.log(multiplyWithSum(2, 10));

// 3 * 3
// 0 + 3 = 3
// 3 + 3 = 6
// 6 + 3 = 9

// 4 * 2
// 0 + 2 = 2
// 2 + 2 = 4
// 4 + 2 = 6
// 6 + 2 = 0
