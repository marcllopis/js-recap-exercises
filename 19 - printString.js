// create a function printString that will receive 2 parameters: a number and a string.
// return the string the number of times that you received as parameter.
// i.e: printString(3, 'blue')
// 'blueblueblue'

const printString = (number, string) => {
  return string.repeat(number);
};

console.log(printString(3, "blue"));
