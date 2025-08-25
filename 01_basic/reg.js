let reg = /^\d{3}-\d{4}-\d{4}$/;
// reg = new RegExp("World");

let str = `2345-1234-1234`;

console.log(str.replace(/world/gi, "세상!"));

console.log(reg.test(str));
