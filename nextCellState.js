var overPopulated = require('./overPopulated')
var underPopulated = require('./underPopulated')
var ressurectable = require('./ressurectable')

function nextCellState(cellState, neighbourCount) {
  if ((cellState  && (neighbourCount == 2 || neighbourCount == 3 )) || (!cellState && ressurectable(neighbourCount))) {
    return true
  }

  if (cellState && (overPopulated(neighbourCount) || underPopulated(neighbourCount))) {
    return false
  }
}

module.exports = nextCellState
