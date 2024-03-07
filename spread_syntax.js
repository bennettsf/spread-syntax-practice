// Task 1: Function Argument Expansion
let numbers = [5, 2, 9];
function sum(a, b, c) {
  return a + b + c;
}
console.log("Task 1: " + sum(...numbers));

// Task 2: Merging Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log("Task 2: " + mergedArray);

// Task 3: Array Element Insertion
let colors = ["red", "green", "blue"];
let extendedColors = ["yellow", ...colors, "purple"];
console.log("Task 3: " + extendedColors);

// Task 4: Cloning and Modifying an Object
let person = {
  name: "John",
  age: 30,
};

let newPerson = {
  ...person,
  name: "Jane",
  gender: "female",
};

console.log("Task 4:");
console.log("Person: " + JSON.stringify(person, null, 4));
console.log("New Person: " + JSON.stringify(newPerson, null, 4));

// Task 5: Combining Objects
let object1 = {
    a: 1,
    b: 2
}

let object2 = {
    b: 3,
    c: 4
}

let combinedObject = {...object1, ...object2}
console.log("Task 5:");
console.log("Combined Objects: " + JSON.stringify(combinedObject, null, 4));