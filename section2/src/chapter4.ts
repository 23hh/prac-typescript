type User = {
  id: number;
  name: string;
  isAdmin: boolean;
}

let users: User[] = [
  { id: 1, name: "Alice", isAdmin: true },
  { id: 2, name: "Bob", isAdmin: false },
  { id: 3, name: "Charlie", isAdmin: false },
];


//index signature
// type contryCodes = {
//   Korea: string;
//   USA: string;
//   Canada: string;
//   UK: string;
// }

// let contryCodes = {
//   Korea: "KR",
//   USA: "US",
//   Canada: "CA",
//   UK: "GB",
// }

type contryCodes = {
  [key: string]: string;
}

let contryCodes: contryCodes = {
  Korea: "KR",
  USA: "US",
  Canada: "CA",
  UK: "GB",
}

type contryNumberCodes = {
  [key: string]: number;
  Korea: number;
}

let contryNumberCodes = {
  // Korea: 82,
  USA: 1,
}