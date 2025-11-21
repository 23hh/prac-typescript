//void

function func1(): string {
  return "hello"
}

function func2(): void {
  console.log("world");
}

function func3(): undefined {
  console.log("world");
  return undefined;
}

//never
function func4(): never {
  while (true) {}
}

function func5(): never {
  throw new Error("This function always throws an error");
}
