let data = true;
let percentage = 76;

if (!data) {
  console.log('data got success');
} else {
  console.log('data not found');
}

if (percentage <= 50) {
  console.log('student is failed');
} else if (percentage >= 50 && percentage < 60) {
  console.log('student passed grade c');
} else if (percentage > 60 || percentage <= 70) {
  console.log('student passed grade b');
} else {
  console.log('student got fifty percent');
}
