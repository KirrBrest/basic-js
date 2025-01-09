const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
 // return n.toString().split('').reduce((sum, symbol) => sum + symbol);
 // return Math.sum(n.toString().split(''));
  let count = 0;
  let arr = n.toString().split('');
  //console.debug(`first arr: ${arr}`)
  const sum = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      count += +arr[i];
    }
    return count;
  };
  sum(arr);
  if (count.toString().length > 1) {
    arr = count.toString().split('');
    count = 0;
    sum(arr);
  }

return count;
}

module.exports = {
  getSumOfDigits
};
