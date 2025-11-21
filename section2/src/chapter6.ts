//any

let anyVar: any = 42;

anyVar = "Now I'm a string";
anyVar = true;
let num: number = anyVar; // Allowed, but not type-safe
num = anyVar

//unknown
let unknownVar: unknown = 42;

unknownVar = "Now I'm a string";
unknownVar = false;
// unknownVar.toUpperCase(); // Error: Object is of type 'unknown'.
