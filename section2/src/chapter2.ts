let arrArray: number[] = [1, 2, 3, 4, 5];
let strArray: string[] = ["a", "b", "C"];

let boolArray: Array<boolean> = [true, false, true];
let mixedArray: (number | string)[] = [1, "two", 3, "four"];

let mixArray: (number | string | boolean)[] = [1, "hello", true, 42, "world", false];

console.log("Number Array:", arrArray);

let doubleArray: number[][] = [
  [1, 2, 3],
  [4, 5],
  [7, 8, 9, 10],
]

let tup1: [number, string] = [1, "one"];
tup1 = [2, "two"];
console.log("Tuple 1:", tup1);
// tup1 = [2, "two", 3]; // Error: too many elements
let tup2: [string, boolean, number] = ["age", true, 30];

tup1.push(3); // Allowed, but not type-safe
console.log("Tuple 1 after push:", tup1); 
tup1.pop();
console.log("Tuple 1 after pop:", tup1);