var indicesOutOfBounds = require('./indicesOutOfBounds')

function getNeighbours(cellRow, cellColumn, board) {
  var results = []

for (var i = cellRow -1; i <= cellRow +1; i++) {
  for (var j = cellColumn -1; j <= cellColumn +1; j++) {
    if (!indicesOutOfBounds(i, j, board) && (i != cellRow || j != cellColumn)) {
      results.push(board[i][j])
    }
  }
} return results
}

module.exports = getNeighbours
