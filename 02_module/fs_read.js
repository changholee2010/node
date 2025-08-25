// fs_read.js
const fs = require("fs");

// 비동기(non블로킹)/동기(블로킹)
fs.readFile("./stdout.log", "utf8", (err, buf) => {
  // callback함수.
  if (err) {
    console.error(err);
    return;
  }
  console.log(buf);
});
let errBuf = fs.readFileSync("./stderr.log", "utf8");
console.log(errBuf);

console.log("다른코드");
