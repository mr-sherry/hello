let name2 = 'aAhmed8';
let name3 = '        raza          ';
console.log(typeof name2);

console.log(name2.length);
console.log(name2.charAt(6));
console.log(name2.charCodeAt(1));
console.log(name2.codePointAt(1));

console.log(name2.concat(name3));
console.log(name2.at(0));
console.log(name2[0]);

console.log(name2.slice(0, 4));
console.log(name2.substring(0, 4));

console.log(name2);

console.log(name3);

console.log(name3.trim());

console.log(name2.split(''));

console.log(name2.replace('a', 'o000'));
console.log(name2.replaceAll('a', 'R'));

console.log(name2.repeat(7));

let str = 'hello from codiea frontend  from dev';
console.log(str.indexOf('from'));
console.log(str.lastIndexOf('from'));

console.log(str.search('from'));
console.log(str.match('from'));
console.log(str.matchAll('from'));

console.log(str.includes('dev'));

console.log(str.startsWith('hell2'));
console.log(str.endsWith('ahmed'));
