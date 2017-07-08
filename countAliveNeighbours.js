var getNeighbours = require('./getNeighbours')
function countAliveNeighbours(cellRow, cellColumn, board) {
  var people = getNeighbours(cellRow, cellColumn, board)
  var sum = 0
  for (var i =0; i< people.length; i++) {
    sum += people[i]
  }
    return sum
}
module.exports = countAliveNeighbours
