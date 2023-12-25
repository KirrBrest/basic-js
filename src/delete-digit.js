const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr = (""+n).split('').map(Number);
  
//console.debug (arr);

  let num;
  let ind = arr.length-1;

  for (let i = 0; i < arr.length - 1; i++) { 
    if (arr[i] < arr [i + 1])  {
      ind = i;
      i = arr.length;
    }
  }

  arr.splice(ind, 1)

  // console.debug (num);
  // console.debug (ind);
  // console.debug (Number(arr.join('')));

  
  return Number(arr.join(''))

  // ===================================

  // for (let i = 0; i < arr.length; i++) {
  //   Number(arr.splice(arr[i], 1).join('')) > Number(arr.splice(arr[i + 1], 1).join('')) ? num = arr[i] : num = arr[i+1];
  
  //   console.debug (Number(arr.splice(arr[i+1], 1).join('')));
  // }
// ===================================================
  
  // let min = (values) => values.reduce((x, y) => Math.min(x, y));
  
  // let index = arr.findIndex(i => i === min(arr));
  
  // let arrNew = arr.splice(index, 1);
    
  // let nTotal = arr.join('');
  
  return Number(nTotal);


}

module.exports = {
  deleteDigit
};
