var conways = require('./conway');
var display = require('./displayBoard');

var board = conways.createBoard(15)

board = spawnRandom(board)

setInterval(tick, 200)

function spawnRandom(board) {
  newBoard = new Array(board.length)

  for(var i = 0; i < board.length; i++) {
    for( var j = 0; j < board.length; j++) {
      newBoard[i][j] = Boolean(Math.round(Math.random()))
    }
  }
  return newBoard
}

function tick() {
  display(board)
  board = conways.nextBoard(board)
}
