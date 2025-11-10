const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = (""+n).split('').map(Number);
  let num;
  let ind = arr.length-1;

  for (let i = 0; i < arr.length - 1; i++) { 
    if (arr[i] < arr [i + 1])  {
      ind = i;
      i = arr.length;
    }
  }

  arr.splice(ind, 1);
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
