const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  console.debug(s1);
  console.debug(s2);
  let result = 0;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  // for (let i = 0; i <= arr1.length; i++) {
  //   let arr2 = s2.split('').map((symbol) => symbol == arr1[i] ? result++ : result);
  // }

  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j <= arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        delete arr2[j];
        result++;
        arrs();
      } 
      console.debug(arr1);
      console.debug(arr2);
    }
  }

  
  console.debug(result);
  return result;
}

module.exports = {
  getCommonCharacterCount
};
