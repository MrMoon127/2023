RED_CUBES = 12;
GREEN_CUBES = 13;
BLUE_CUBES = 14;

const input02 = require('../data/data02');

const puzzle2a = (input) => {
  let idTotal = 0;

  let strArr = input.split('\n');

  for (const game of strArr) {
    let formatedStr = game.replace('Game ', '');
    formatedStr = formatedStr.split(': ');

    // we're saving this if it matches the criteria since we'll get rid of it
    let legal = true;
    const id = Number(formatedStr[0]);

    formatedStr = formatedStr[1].replaceAll(';', ',');
    formatedStr = formatedStr.split(', ');

    for (const pull of formatedStr) {
      pullArr = pull.split(' ');
      if (pull.includes('red') && pullArr[0] > RED_CUBES) {
        legal = false;
      } else if (pull.includes('green') && pullArr[0] > GREEN_CUBES) {
        legal = false;
      } else if (pull.includes('blue') && pullArr[0] > BLUE_CUBES) {
        legal = false;
      }
    }

    if (legal) {
      idTotal += id;
    }

  }


  return idTotal;
}


const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

console.log(puzzle2a(input02));