//Can you render your board in prettier way?
function displayBoard(board) {
  process.stdout.write('\033c');
  for(var i = 0; i < board.length; i++) {
    var row = board[i]
    console.log(row.map((cell) => (cell) ? 'x' : '.').join(' '))
  }
  console.log()
}
module.exports = displayBoard
