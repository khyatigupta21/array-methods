//The JavaScript array copyWithin() method copies the part of the given array with its own elements and returns the modified array.

var arr = ["Html", "CSS", "JavaScript", "Node", "React"];
console.log("line no 4 - Array is ", arr);

// var result = arr.copyWithin(0, 1, 2);
// console.log("line no 7 - Result is ", result);

// var result = arr.copyWithin(0, 1, 3);
// console.log("line no 10 - Result is ", result);

//Only provide target and start index

// var result = arr.copyWithin(0, 1);
// console.log("line no 15 - Result is ", result);

//referencing to other array
var arr1 = arr;
// console.log("line no 20 - arr1 is ", arr1);

// var result = arr1.copyWithin(0, 1, 3);
// console.log("line no 23 - arr1 result is ", result);
// console.log("line no 24 - arr result is ", arr);

//providing only target index

var result = arr.copyWithin(4); //
console.log("line no 28 - Result is ", result);
