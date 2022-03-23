// create a function move that receives 2 arrays as arguments and removes the last element of the first and adds it to the second.
// i.e: arr1 = [1, 2, 3] arr2 = [4, 5]
// move(arr1, arr2).
// arr1 = [1, 2]
// arr2 = [4, 5, 3]

const move = (firstArray, secondArray) => {
  let removed = firstArray.pop();
  secondArray.push(removed);
};

let arr1 = [1, 2];
let arr2 = [4, 5, 3];
move(arr1, arr2);
console.log(arr1, arr2);
