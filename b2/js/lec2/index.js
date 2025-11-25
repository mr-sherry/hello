// arithmetic;
let num = 832;
let num2 = 8323;

console.log(num * num2);

console.log(++num);

// console.log(num);

console.log(--num2);
// logical;

// && if (user && loggedin)
// || if (user || loggedin)
let user = false;
console.log(!user);

// ! if(!user)

// comparison;

let value = 124;
let value2 = 'jaja';
let value4 = 'jajaa';
let value3 = '2';
let value5 = '5';

console.log('addition', value3 + value5);

let str = 'ahmed';
let str2 = 'raza';
console.log(str + str2);

console.log(value === value2);
console.log(value !== value2);
console.log(value >= value3);

console.log(value2 >= value4);

// assignment;

let number = 514;
let number2 = 8888;
number2 = number + number2;

number2 += number;

console.log(number2);

number = number2;
console.log(number);

let bool = false;

let numbers = (bool ||= 546);
console.log(numbers);
