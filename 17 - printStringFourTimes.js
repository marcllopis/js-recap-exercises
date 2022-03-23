/*create a function printStringFourTimes
that will receive a word as a parameter and print it 4 times. */

const printStringFourTimes = (string) => {
  let repeated = string.repeat(4);
  return repeated;
};

console.log(printStringFourTimes("hello"));
