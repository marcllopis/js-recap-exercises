// declare function dinnerIngredients that receives an array of ingredients. Iterate over the array and console.log() the following string on each iteration: 'I have fridgeitem in my fridge'

const dinnerIngredients = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("I have " + arr[i] + " in my fridge");
  }
};

const ingredients = ["eggs", "ketchup", "milk", "chocolate", "cheese"];

console.log(dinnerIngredients(ingredients));
