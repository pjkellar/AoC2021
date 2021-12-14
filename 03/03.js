fs = require('fs');

// Common starting point, get data from file...
const input = fs.readFileSync(`./input.txt`, 'utf8');

const data = input.split('\r\n');

// Create arrays to track count of bits at each index
// Length needs to be length of line
// Filled with all zeros to make incrementing values easier
let zeros = Array(data[0].length).fill(0);
let ones = Array(data[0].length).fill(0);

data.forEach((line) => {
  let bits = [...line];
  bits.forEach((bit, i) => {
    bit == 0 ? zeros[i]++ : ones[i]++;
  });
});

// Compare bits for both arrays at same index and see which count is higher
let gamma = zeros.map((bit, index) => {
  return +(bit < ones[index]);
});

//Join the array elements into a string to create the "binary representation" of gamma
binaryGamma = gamma.join('');

// Since epsilon is just flipped bits, we can use gamma to determine it
binaryEpsilon = [...binaryGamma]
  .map((bit) => {
    if (bit == '0') {
      return 1;
    }
    return 0;
  })
  .join('');

// Math to get answer
gamma = parseInt(binaryGamma, 2);
epsilon = parseInt(binaryEpsilon, 2);
let part1 = gamma * epsilon;
console.log(part1);
