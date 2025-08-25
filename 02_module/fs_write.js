// fs_write.js
const fs = require("fs");
// fs.readFile / fs.readFileSync 활용해서 stdout.log 정보를 읽어들이고...
fs.readFile("./stdout.log", "utf8", (err, buf) => {
  // callback함수.
  // 예외가 있으면...
  if (err) {
    console.error(err);
    return;
  }
  // 정상적으로 읽었으면...writeFile 비동기함수 호출.
  fs.writeFile(
    "./file_log.txt", // 저장위치.
    buf, // 쓸 내용.
    { encoding: "utf8", flag: "a" }, // 옵션.
    (err) => {
      // 콜백함수.
      if (err) {
        console.error("예외발생");
        return;
      }
      console.log("파일생성완료!");
    }
  ); // end of fs.writeFile();
}); // end of fs.readFile();
