const input01a  = require('../data/data01a')

const puzzle01a = (input) => {
  let total = 0;

  const filteredInput = input.split('\n');

  for (const word of filteredInput) {
    let numbers = [];

    for (const letter of word) {
      if (Number(letter)) {
        numbers.push(letter);
      }
    }
    total += Number(numbers[0] + numbers[numbers.length - 1]);
  }
  return total
}

x = puzzle01a(input01a)
console.log(x);