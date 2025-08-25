const arr = [
  { name: "John Doe", email: "john@email.com" },
  { name: "Jeremy Go", email: "jeremy@email.com" },
];

console.table(arr);

const obj = {
  students: {
    grade1: {
      classA: {
        student1: { name: "Alice", age: 7 },
        student2: { name: "Bob", age: 6 },
      },
      classB: {
        student1: { name: "Charlie", age: 7 },
        student2: { name: "Daisy", age: 6 },
      },
    },
    grade2: {
      classA: {
        student1: { name: "Eve", age: 8 },
        student2: { name: "Frank", age: 8 },
      },
      classB: {
        student1: { name: "Grace", age: 8 },
        student2: { name: "Henry", age: 9 },
      },
    },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

console.dir(obj, { depth: 4, colors: true });
