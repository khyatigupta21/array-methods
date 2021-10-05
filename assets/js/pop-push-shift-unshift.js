/*
pop() removes the last element of an array
push() adds an element to the end of an array
shift() removes the first element
unshift() adds an element to the beginning of the array
*/

const cities = ["Jabalpur", "Indore", "Ujjain", "Bhopal", "Dewas"];

// Array Pop()
console.log("Deleted city is", cities.pop()); //remove the last element and returns it
console.log("line no 6 - Cities left after pop", cities);

//Array Push()
cities.push("Satna"); // adds one new items to the end of city array
console.log("line no 9 - Cities are", cities);

cities.push("Ratlam", "Gwalior"); // adds two new items to the end of city array
console.log("line no 12 - Cities after using Push", cities);

console.log(cities.push("Sagar")); // returns the new length of array

//Array Shift() -Remove an item from the beginning of an array
cities.shift("Jabalpur"); //Remove Jabalpur from cities array and return it
console.log("line no 18 - Cities after using Shift", cities);

//Array Unshift() -  Add items to the beginning of an array
cities.unshift("Vidisha", "Itarsi"); // adds two new items to the beginning of the array
console.log("line no 23 - Cities after using Unshift", cities);

console.log(cities.unshift("Nagda")); // returns the new length of array
