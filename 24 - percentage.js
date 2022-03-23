// create a function percentage that will receive an array of numbers and return another with 3 numbers: index 0 will be the percentage of positive numbers, index 1 will be the percentage of numbers that are zero and index 2 the percentage of negative numbers.
// i.e: percentage([1, 2, 0, -1]) should return [0.5, 0.25, 0.25], as there are 50% of positive numbers, 25% zeros, and 25% negative numbers.

const percentage = (arr) => {
  let newArr = [];
  let positive = 0;
  let zero = 0;
  let negative = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive = positive + 1;
    }
    if (arr[i] === 0) {
      zero = zero + 1;
    }
    if (arr[i] > 0) {
      negative = negative + 1;
    }
  }
  let positivePerc = (positive * arr.length) / 100;
  let zeroPerc = (zero * arr.length) / 100;
  let negativePerc = (negative * arr.length) / 100;

  return [positivePerc, zeroPerc, negativePerc];
};

console.log(percentage([4, -5, 3, 0]));
