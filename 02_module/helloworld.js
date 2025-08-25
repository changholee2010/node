// console에 "hello, world" 구문을 출력하는 함수 myFunc을 선언.
function myFunc() {
  console.log("hello, world");
}

const defaultNum = 12;

const sum = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};
// myFunc();

// export { myFunc, defaultNum, sum };
module.exports = {
  myFunc,
  defaultNum,
  sum,
};
