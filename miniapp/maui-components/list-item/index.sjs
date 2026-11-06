var arrowType = {
  right: 'transform: rotate(270deg);',
  up: 'transform: rotate(180deg);',
  down: 'transform: rotate(0deg);',
};

function getArrow(arrow) {
  if (arrow === true) {
    return arrowType.right;
  }
  return arrowType[arrow] || '';
}

module.exports = {
  getArrow: getArrow
};
