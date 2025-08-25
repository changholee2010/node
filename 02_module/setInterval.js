// setInterval.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// count: 100 -> 0 1씩 감소.
let count = 3;
let timeOver = false;

const interval = setInterval(() => {
  if (count <= 0) {
    console.log("\n시간이 종료되었습니다.");
    // timeOver = true;
    // clearInterval(interval);
    process.exit(); // node프로세스를 강제로 종료.
    // return;
  }
  count--;
  //console.log(`현재 count: ${count}`);
}, 1000);

let wordAry = "Lorem ipsum dolor sit, amet consectetur adipisicing elit." // Excepturi asperiores dolores sunt, unde a corrupti. Error commodi quasi nulla placeat maxime, ullam nam, velit deleniti fuga molestiae quos earum eum!" //
  .split(" ");

function myFunction() {
  // 100이 완료되기전에 배열에 있는 값을 clear하면 성공.
  // 100이 완료된 후 배열에 값이 있으면 실패.
  if (timeOver) {
    console.log("실패....");
    rl.close(); // stream은 사용후 close();
    return;
  }
  if (!timeOver && wordAry.length == 0) {
    console.log("성공....");
    clearInterval(interval);
    rl.close(); // stream은 사용후 close();
    return;
  }

  // 콘솔에 남은 단어를 출력하기.
  console.log(wordAry.join(" "));
  // 사용자의 입력된 단어를 확인해서 배열에서 찾아서 제거.
  rl.question("단어를 입력하세요.", (answer) => {
    let search = answer;
    let idx = wordAry.indexOf(search);
    if (idx > -1) {
      wordAry.splice(idx, 1); // 삭제.
      console.log(`${search}를 찾아서 삭제함.`);
    } else {
      console.log(`${search} 단어가 없습니다.`);
    }
    // 재귀호출.
    myFunction();
  });
}
myFunction();
