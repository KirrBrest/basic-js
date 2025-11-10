const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let matrixInfo = matrix;
  let counter = 0;
  matrixInfo.map((arr) => arr.map((item) => item === '^^'? counter++ : ""));
  return counter;
}

module.exports = {
  countCats
};
