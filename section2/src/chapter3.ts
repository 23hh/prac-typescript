import { read } from "fs";

// object
let obj: {
  id ?: number;
  name: string;
  isActive: boolean;
} = {
  id: 1,
  name: "Object One",
  isActive: true,
}

obj.id = 2;


let readonlyObj: {
  readonly id: number;
  name: string;
  isActive: boolean;
} = {
  id: 1,
  name: "Readonly Object",
  isActive: false,
}

// readonlyObj.id = 2; // Error: Cannot assign to 'id' because it is a read-only property