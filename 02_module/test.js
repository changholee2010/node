// import { myFunc, sum } from "./helloworld.js";
const { myFunc, sum } = require("./helloworld");

myFunc();
let n1 = 11;
let n2 = 13;
console.log(`두수 ${n1}, ${n2}의 합은 ${sum(n1, n2)}`);
