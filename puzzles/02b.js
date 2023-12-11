const input02 = require('../data/data02');


const puzzle2b = (input) => {
  let totalPower = 0;
  
  let strArr = input.split('\n');
  
  for (const game of strArr) {
    let cubeMin = {'red': 0, 'blue': 0, 'green': 0};
    let formatedStr = game.replace('Game ', '');
    formatedStr = formatedStr.split(': ');

    formatedStr = formatedStr[1].replaceAll(';', ',');
    formatedStr = formatedStr.split(', ');

    for (const pull of formatedStr) {
      const splitPull = pull.split(' ');
      const color = splitPull[1];

      if (cubeMin[color] < Number(splitPull[0])) {
        cubeMin[color] = Number(splitPull[0])
      }
    }

    let power = 1;

    for (const color in cubeMin) {
      power *= cubeMin[color];
    }

    totalPower += power;
  }


  return totalPower;
}

const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

console.log(puzzle2b(input02));