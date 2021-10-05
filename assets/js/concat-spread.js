/*The concat() method does not change the existing arrays, but returns a new array, 
containing the values of the joined arrays.

If you know you're dealing with arrays, use spread. But if you might be dealing with the 
possibility with a non-array, then use concat to merge an array*/

//defining arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10, 11, 12];
const arr3 = ["a", "b", "c", "d", "e"];

//concatenating two arrays

const concatTwo = arr1.concat(arr2);
console.log({ concatTwo });

//concatenating three arrays
const concatThree = arr1.concat(arr2, arr3);
console.log({ concatThree });

//concatenating array with non array
function combineArray(arr1, arr2) {
  return [].concat(arr1, arr2);
}
const isArray = [1, 2, 3];
const nonArray = "random";

const concatResult = combineArray(isArray, nonArray);
console.log("line no 29 - combined array using concat", concatResult);

// Array concatenation using spread

// Method 2: Spread
const cars = ["car1", "car2", "car3"];
const trucks = ["truck1", "truck2", "truck3"];
const bike = "Royal Enfield";

const concatResult1 = [...cars, ...trucks];
console.log("line no 39 - combined array using spread", concatResult1);
//output -  ['car1', 'car2', 'car3', 'truck1', 'truck2', 'truck3']

const concatResult2 = [...cars, ...bike];
console.log("line no 43 - combined array using spread", concatResult2);
//output - ['car1', 'car2', 'car3', 'R', 'o', 'y', 'a', 'l', ' ', 'E', 'n', 'f', 'i', 'e', 'l', 'd']
