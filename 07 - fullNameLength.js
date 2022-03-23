// create a function fullNameLength that receives the name and surname as parameters
//   and returns the length of the full name,
//   counting with the extra space that separates
//   both names

const fullNameLength = (name, surname) => {
  let fullName = name + " " + surname;
  return fullName.length;
};

console.log(fullNameLength("bob", "smith"));
