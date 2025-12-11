let data = [
  {
    Name: 'Zain Ali',
    Rollno: 1235,
    university: 'Govt College Bahawalpur',
    degree: 'Intermediate (Pre-Medical)',
    subject: {
      biology: 67,
      math: { status: { one: 'student Pass', two: 'student fail' } },
      chemistry: 75,
    },
    marks: 957,
    Grade: 'A+',
  },
  {
    Name: 'Ali',
    Rollno: 1236,
    university: 'Islamia University of Bahawalpur',
    degree: 'BS Computer Science',
    subject: { biology: 65, math: 67, chemistry: 74 },
    marks: 967,
    Grade: 'B+',
  },
  {
    Name: 'Ahmad',
    Rollno: 1237,
    university: 'Govt College Multan',
    degree: 'FSC (Pre-Engineering)',
    subject: { biology: 67, math: 66, chemistry: 75 },
    marks: 957,
    Grade: 'A+',
  },
  {
    Name: 'Arslan',
    Rollno: 1238,
    university: 'Islamia University of Bahawalpur',
    degree: 'BS Information Technology',
    subject: { biology: 70, math: 72, chemistry: 78 },
    marks: 980,
    Grade: 'A',
  },
  {
    Name: 'Abdus Salam',
    Rollno: 1239,
    university: 'Air University Islamabad',
    degree: 'Software Engineering',
    subject: { biology: 60, math: 80, chemistry: 74 },
    marks: 950,
    Grade: 'A',
  },
  {
    Name: 'Ali Raza',
    Rollno: 1240,
    university: 'Islamia University of Bahawalpur',
    degree: "Bachelor's in Software Engineering",
    subject: { biology: 66, math: 75, chemistry: 70 },
    marks: 940,
    Grade: 'A-',
  },
  {
    Name: 'Abdul Wahab',
    Rollno: 1241,
    university: 'Islamia University of Bahawalpur',
    degree: 'BS Mathematics',
    subject: { biology: 67, math: 66, chemistry: 75 },
    marks: 750,
    Grade: 'D+',
  },
  {
    Name: 'Ahmad',
    Rollno: 1290,
    university: 'NUST University Islamabad',
    degree: 'BS Electrical Engineering',
    subject: { biology: 80, math: 90, chemistry: 85 },
    marks: 1050,
    Grade: 'A+',
  },
  {
    Name: 'Ahmad',
    Rollno: 1242,
    university: 'Cholistan University Bahawalpur',
    degree: 'BS Agriculture',
    subject: { biology: 67, math: 66, chemistry: 75 },
    marks: 957,
    Grade: 'A+',
  },

  {
    Name: 'Hamza Tariq',
    Rollno: 1243,
    university: 'Virtual University of Pakistan',
    degree: 'BS Software Engineering',
    subject: { biology: 60, math: 88, chemistry: 70 },
    marks: 990,
    Grade: 'A',
  },
  {
    Name: 'Usman Khalid',
    Rollno: 1244,
    university: 'Punjab University Lahore',
    degree: 'BS Physics',
    subject: { biology: 55, math: 92, chemistry: 80 },
    marks: 1010,
    Grade: 'A+',
  },
  {
    Name: 'Bilal Ahmed',
    Rollno: 1245,
    university: 'COMSATS Islamabad',
    degree: 'BS Computer Science',
    subject: { biology: 58, math: 85, chemistry: 82 },
    marks: 975,
    Grade: 'A',
  },
];

console.log(data[0].subject.biology);

// loops;
// for
//     for in
//         foreach
//             for of
//                 while
//                     do while

for (let index = 0; index < data.length; index++) {
  console.log(
    `student: ${data[index].subject.biology} got: ${data[index].marks} marks`
  );
}



// template litrals

// let exp = 'student: ' + data[0].Name + ' got: ' + data[0].marks + ' marks';
// let expTemp = `student ${data[0].Name} got: ${data[0].marks} marks`;

// console.log(expTemp);
