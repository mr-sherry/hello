let array = ['hello', 'akaka', 'jdas'];
// console.log(array);

let stdData = { name: 'ahmed', rolllNo: 20, grade: 'c+' };

let newData = Object.keys(stdData);
let newData2 = Object.values(stdData);
let newData1 = Object.entries(stdData);

console.log(newData);
console.log(newData2);
console.log(newData1);

let users = [
  {
    name: { firstName: 'ahmed', lastName: 'raza' },
    rolllNo: 20,
    grade: 'c+',
    marks: [89, 78, 88, 98],
  },
  { name: 'raza', rolllNo: 21, grade: 'fail' },
  { name: 'ali', rolllNo: 22, grade: 'b+' },
  { name: 'arslan', rolllNo: 23, grade: 'a+' },
];

console.log(users[0].name.firstName + users[0].name.lastName);
