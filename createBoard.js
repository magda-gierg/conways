function createBoard(size) {
  var board = new Array(size)
  for (var i=0; i < size; i++) {
    board[i]= new Array(size)
    board[i].fill(false)
  }
  return board

}

module.exports = createBoard
