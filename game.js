const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board1 = ['N', 'N', 'N'];
const board2 = ['N', 'N', 'N'];
const board3 = ['N', 'N', 'N'];

rl.question(`Current Board: \n ${board1} \n ${board2} \n ${board3} \n Make a Move: `, (move) => {

  console.log(`Move made: ${move}`);

  rl.close();
});