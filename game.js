const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let win = false;

const board = {
  0: 'N',
  1: 'N',
  2: 'N',
  3: 'N',
  4: 'N',
  5: 'N',
  6: 'N',
  7: 'N',
  8: 'N'
}

const board1 = [board[0], board[1], board[2]];
const board2 = [board[3], board[4], board[5]];
const board3 = [board[6], board[7], board[8]];


while (!win) {
  rl.question(`Current Board: \n ${board1} \n ${board2} \n ${board3} \n Make a Move: `, (move) => {
    
    console.log(`Move made: ${move}`);
    if (move === 'a') {
      win = true;
    }
  });

}


rl.close();