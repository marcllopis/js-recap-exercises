// create a function stepByStep that will receive a number as argument and print the numbers starting from 0.
// i.e: stepByStep(5)
// "012345"

const stepByStep = (number) => {
  let i = number;
  while (i >= 0) {
    console.log(i);
    i = i - 1;
  }
};

console.log(stepByStep(5));
