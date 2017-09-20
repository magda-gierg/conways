function displayBoard(board) {
  for (var i=0; i < board.length; i++) {
      var str = ""
    for (var j=0; j<board.length; j++) {
      board[i][j] === true ? str += "*" : str += "."
    }
    console.log(str)
  }
  console.log()
}



module.exports = displayBoard
