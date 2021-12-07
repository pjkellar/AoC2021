fs = require('fs');

// Common starting point, get data from file...
const input = fs.readFileSync(`./input.txt`, 'utf8');

// Solution starts here

let partA = 0;
let partB = 0;

const data = input.split('\r\n');

let horizontal = 0;
let depth = 0;

data.forEach((line) => {
  let [ command, value ]  = line.split(' ');
  if(command === 'forward'){
    horizontal = horizontal + parseInt(value);
  } else if(command === 'down'){
    depth = depth + parseInt(value);
  } else if(command === 'up'){
    depth = depth - parseInt(value);
  }
});

partA = horizontal * depth;

// Part A Result
console.log(`The result for part A is: ${partA}`);

let horizontal2 = 0;
let depth2 = 0;
let aim = 0;

data.forEach((line) => {
  let [ command, value ]  = line.split(' ');
  if(command === 'forward'){
    horizontal2 = horizontal2 + parseInt(value);
    // Need adjust aim
    depth2 = aim * parseInt(value) + depth2
  } else if(command === 'down'){
    aim = aim + parseInt(value);
  } else if(command === 'up'){
    aim = aim - parseInt(value);
  }
});

partB = horizontal2 * depth2;

// Part B Result
console.log(`The result for part B is: ${partB}`);
