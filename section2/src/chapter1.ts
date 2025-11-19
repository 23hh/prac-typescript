// number
let num1: number = 10;
let num2: number = 3.14;
let num3: number = NaN;
let num4: number = Infinity;

// num1 = "20"; // Error: Type 'string' is not assignable to type 'number'.

// string
let str1: string = "Hello, TypeScript!";
let str2: string = 'Single quotes are also valid.';
let str3: string = `Template literals allow for ${num1 + num2}.`;
// str1 = 100; // Error: Type 'number' is not assignable to type 'string'.
str2.toLowerCase(); // Correct usage of string method

// boolean
let isDone: boolean = false;
isDone = true;
// isDone = 1; // Error: Type 'number' is not assignable to type 'boolean'.  

// null and undefined
let u: undefined = undefined;
let n: null = null;

// let numA: number = null; // Error with strictNullChecks: Type 'null' is not assignable to type 'number'.

// Literal type
// Lireral -> Value
let numA: 10 = 10; // Literal type
// numA = 12; // Error: Type '12' is not assignable to type '10'.

let strA : "hello" = "hello";
// strA = "world"; // Error: Type '"world"' is not assignable to type '"hello"'.

let boolA: true = true;
// boolA = false; // Error: Type 'false' is not assignable to type 'true'.
