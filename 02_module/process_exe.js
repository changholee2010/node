// process_exe.js
// import process from "process";
// import os from "os";
const path = require("path");

console.log(__filename); // D:\git\node\02_module\process_exe.js
console.log(__dirname); // D:\git\node\02_module

console.log(path.basename(__filename)); // process_exe.js
console.log(path.basename(__dirname)); // 02_module

let result = path.format({ dir: "C:/Users/admin", base: ".gitconfig" });
result = path.parse("C:/Users/admin/.gitconfig");
console.log(result);
