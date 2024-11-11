const n = 5;
let pattern = '';

for (let i = 1; i <= n; i++) {
  pattern += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
}

console.log(pattern);


const n1 = 5; 
let pattern1 = '';

for (let i = 1; i <= n1; i++) {
  for (let j = 1; j <= i; j++) {
    pattern1 += j + ' ';
  }
  pattern1 += '\n';
}

console.log(pattern1);


// reverse pattern

const n2 = 5; 
let pattern2 = '';

for (let i = n2; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    pattern2 += j + ' ';
  }
  pattern2 += '\n';
}

console.log(pattern2)