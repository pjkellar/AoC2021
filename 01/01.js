// Common starting point, get data from file...

fs = require('fs');
const input = fs.readFileSync(`./input.txt`, 'utf8');

// Solution starts here

let partA = 0;
let partB = 0;
const data = input.split('\r\n');

// Helper Functions
function compareDepths(a, b) {
  // if b is larger than a it means there was an increase
  return parseInt(b) - parseInt(a) > 0;
}

function slidingWindowSum(a, b, c) {
  let sum = parseInt(a) + parseInt(b) + parseInt(c);
  return sum;
}

// Part A
for (i = 0; i < data.length; i++) {
  compareDepths(data[i], data[i + 1]) ? partA++ : null;
}

// Part B
for (i = 0; i < data.length; i++) {
  // Check to see if we're still in valid range of the array...
  if (data[i + 1] !== undefined) {
    compareDepths(
      slidingWindowSum(data[i], data[i + 1], data[i + 2]),
      slidingWindowSum(data[i + 1], data[i + 2], data[i + 3])
    )
      ? partB++
      : null;
  }
}

// Part A Result
console.log(`The result for part A is: ${partA}`);

// Part B Result
console.log(`The result for part B is: ${partB}`);
