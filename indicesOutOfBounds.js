var outOfBounds = require('./outOfBounds')

function indicesOutOfBounds(rowIndex, columnIndex, array) {
  return outOfBounds(rowIndex, array) || outOfBounds(columnIndex, array)
  // return rowIndex <0 || rowIndex >= array.length || columnIndex <0 || columnIndex >= array.length
}

module.exports = indicesOutOfBounds
