// fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch(console.log);

let name = "박봉근";
let score = 80;

console.log("이름은 " + name + ", 점수는 " + score);
console.log(
  `이름은 ${name}, 점수는 ${score} 합격여부 ${score > 60 ? "합격" : "불합격"}`
);

[1, 2, 3].forEach((element) => {
  console.log(element);
});

function sum(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
}

const NumberFormat = "2025.08.08";
// NumberFormat = "2025.08.09"; 상수변수는 재할당이 불가.
for (let i = 1; i <= 5; i++) {
  if (i % 2) {
    // falsy : 0, null, "", undefined
    let name = "Kim"; // {} 유효한 값을 유지.
    console.log(name);
  } else {
    console.log(name);
  }
}

if (score) {
  let name = "홍길동";
  console.log(name);
}
