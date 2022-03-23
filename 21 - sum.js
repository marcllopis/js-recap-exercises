// create a function sum, that will receive a number as a parameter and return the sum of the numbers previous to it.
// i.e: sum(4)
// 6
// which is 0 + 1 + 2 + 3

const sum = (number) => {
  let total = 0;
  for (let i = 0; i < number; i++) {
    total = total + i;
  }
  return total;
};

console.log(sum(4));
