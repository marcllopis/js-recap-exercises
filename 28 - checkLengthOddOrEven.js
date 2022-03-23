// create a function oddOrEven that will receive an array and check if the length of the array is an odd or even number, and return the result.
const lettersArray = ["a", "b", "c", "d", "e", "f", "g"];

const oddOrEven = (arr) => {
  if (arr.length % 2 === 0) {
    return "even length";
  } else {
    return "odd length";
  }
};

console.log(oddOrEven(lettersArray));
