/*
The fill() method fills all the elements in an array with a static value.
You can specify the index for starting and ending fill(). By default it changes the whole array.

value	Required.	The value to fill the array with
start	Optional.	The index to start filling the array (default is 0)
end	    Optional.	The index to stop filling the array (default is array.length)
*/

const arr = [1, 2, 3];
console.log("line no 8", arr.fill(4));

const arr1 = [5, 6, 7];
// console.log("line no 10", arr1.fill(4, 1));
console.log("line no 11", arr1.fill(4, 1, 3));

const arrName = ["Rohit", "Pooja", "Khushi", "Ved", "Arnav"];
console.log("line no 19 - Name list is", arrName);

console.log("line no 20 - New array is", arrName.fill("new value"));

// fill last 3 array values to static value
var arrTech = ["HTML", "CSS", "JavaScript", "Node", "React"];
console.log("line no 24 -  arrTech list is", arrTech);

console.log(
  "line no 27 - updated arrTech with Last filled values are",
  arrTech.fill("New Value", 2, 4)
);
