// timer.js
setTimeout(() => {
  console.log("1초후에 실행됩니다.");
}, 1000);

const interval = setInterval(() => {
  console.log("매 1초 단위로 실행됩니다.");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

setImmediate(() => {
  console.log("코드 실행후 실행."); // 이벤트루프 stack에 작업을 완료.
  // queue 에 작업을 실행하기 전 실행.
});

let sum = 0;
for (let i = 0; i < 999999; i++) {
  sum += i;
}
console.log("sum=>" + sum);
