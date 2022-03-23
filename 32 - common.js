// Loop over the following arrays, and console.log() the item both arrays have in common:

const arr1 = ["tree", "river", "mountain"];
const arr2 = ["ocean", "tree", "sand"];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr[i] === arr[j]) {
      console.log(arr[i]);
    }
  }
}
