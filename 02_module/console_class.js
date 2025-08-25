// console_class.js
const { Console } = require("console");
const fs = require("fs");
const { defaultNum } = require("./helloworld");

const output = fs.createWriteStream("./stdout.log");
const errput = fs.createWriteStream("./stderr.log", { flags: "a" });

const logger = new Console({ stdout: output, stderr: errput });
logger.log("디폴트값: %d", defaultNum);
logger.error("에러가 발생했습니다.");

for (let i = 0; i < 10; i++) {
  logger.log(`i의 값은 ${i}`); // => 파일에 작성.
  console.log(`i의 값은 ${i}`); // => 콘솔에 출력.
}
