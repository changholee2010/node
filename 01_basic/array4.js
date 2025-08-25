// [].reduce().
let result = [10, 15, 20, 25, 30].reduce((acc, elem) => {
  // console.log(acc, elem);
  // 첫번째: 0 , 10
  // 두번째: 10, 15
  // 세번째: 25, 20
  // ...
  // 다섯째: 25, 30
  if (elem % 2 == 0) {
    acc.push(elem);
  }
  return acc; // 다음순번의 acc값.
}, []); // [].push(10) 추가.
console.log(result); // [10, 20, 30]
