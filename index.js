// 1. Lowest to Highest
const array = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
array.sort((a, b) => {
  return a - b;
});
console.log(array);

// 2. Alphabetical Order
const names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
names.sort();
console.log(names);

// BONUS 2
const strLength = ["Danica", "Lala", "Alina", "Dan"];
strLength.sort((a, b) => {
  return a.length - b.length;
});
console.log(strLength);
