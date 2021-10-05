//The entries() method returns an Array Iterator object with key/value pairs.

const names = ["khyati", "Aadya", "Amit", "Ayansh"];
const itr = names.entries();

console.log("line no 6 - entries are", itr);
for (let x of itr) {
  console.log("line no 8 - Entries are", x);
}
