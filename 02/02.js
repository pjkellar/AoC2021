fs = require('fs');

// Common starting point, get data from file...
const input = fs.readFileSync(`./sample.txt`, 'utf8');

// Solution starts here

let partA = 0;
let partB = 0;

const data = input.split('\r\n');

let horizontal = 0;
let depth = 0;

data.forEach((line) => {
  let commands = line.split(' ');
  switch (commands[0]) {
    case 'forward':
      horizontal = horizontal + parseInt(commands[1]);
      break;
    case 'down':
      depth = depth + parseInt(commands[1]);
      break;
    case 'up':
      depth = depth - parseInt(commands[1]);
      break;
  }
});

partA = horizontal * depth;

// Part A Result
console.log(`The result for part A is: ${partA}`);

let horizontal2 = 0;
let depth2 = 0;
let aim = 0;

data.forEach((line) => {
  let commands = line.split(' ');
  switch (commands[0]) {
    case 'forward':
      horizontal2 = horizontal2 + parseInt(commands[1]);
      depth2 = aim * parseInt(commands[1]);
      break;
    case 'down':
      aim = aim + parseInt(commands[1]);
      break;
    case 'up':
      aim = aim - parseInt(commands[1]);
      break;
  }
  console.log(`horizontal:${horizontal2}`);
  console.log(`depth:${depth2}`);
  console.log(`aim:${aim}`);
});

partB = horizontal2 * depth2;
// Part B Result
console.log(`The result for part B is: ${partB}`);
