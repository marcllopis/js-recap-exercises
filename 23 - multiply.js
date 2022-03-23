// create a function multiply, that will receive an array of numbers as argument and return the multiplication of all numbers.
// i.e: multiply([1, 4, 7]) should return 28, which is 1 * 4 * 7

const multiply = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
};

console.log(multiply([4, 5, 3]));
