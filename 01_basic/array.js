// [].sort()

let fruits = ["apple", "cherry", "banana"];

fruits.sort();

fruits.forEach((fruit) => {
  console.log(fruit);
});

let numbers = [1, 10, 100, 2, 12, 44];
numbers.sort(function (a, b) {
  if (b > a) {
    return 1; // 위치를 변경: 양의값.
  } else {
    return -1; // 위치를 유지: 음의값.
  }
});
numbers.forEach((number) => {
  console.log(number);
});

// filter()
[
  { name: "Hong", point: 10 },
  { name: "Kim", point: 23 },
  { name: "Park", point: 46 },
  { name: "Choi", point: 17 },
  { name: "Hwang", point: 56 },
]
  .filter((elem, idx, ary) => {
    // console.log(elem);
    if (elem.point > 30) {
      // 30보다 큰값을 새로운 생성.
      return true;
    }
  })
  .forEach((elem) => {
    console.log("이름: " + elem.name); // 이름:Park, 이름:Hwang // 46, 56
  });

// map (mapping)
// A -> A'
// {name, age, point} => {name, point}
