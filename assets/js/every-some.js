//every() - A Boolean. Returns true if all the elements in the array pass the test, otherwise it returns false

const age = [16, 25, 30, 34, 18, 45, 50, 55, 56, 60];
function checkAdult(age) {
  return age >= 18;
}
console.log("line no 17", age.every(checkAdult)); // return false

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 0, -2, 9, -6];

function checkPositive(number) {
  return number > 0;
}

console.log("line no 26", arr1.every(checkPositive)); //output - true
console.log("line no 27", arr2.every(checkPositive)); //output - false

const students = [
  { name: "a", percentage: 70, result: true },
  { name: "b", percentage: 50, result: true },
  { name: "c", percentage: 30, result: false },
  { name: "d", percentage: 80, result: true },
  { name: "e", percentage: 90, result: true },
];

const isAllStudentPassed = students.every((value) => value.result);
console.log("line no 38", isAllStudentPassed);

// some() - The some() method checks at least one element satisfies the given condition.

const isAnyStudentPassed = students.some((value) => value.result);
console.log("line no 43", isAnyStudentPassed);
