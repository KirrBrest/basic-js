const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result;
  let arrTransform = [...arr];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-prev') {
        delete arrTransform[i - 1];
        delete arrTransform[i];
      } else if (arr[i] === '--discard-next') {
        delete arrTransform[i + 1];
        delete arrTransform[i];
      } else if (arr[i] === '--double-prev') {
        arrTransform.splice(arrTransform[i], 1, arr[i-1]);
      } else if (arr[i] === '--discard-next') {
        arrTransform.splice(arrTransform[i], 1, arr[i+1])
      }
    };
    for (let i = 0; i < arrTransform.length; i++) {
      if (arrTransform === undefined) {
        arrTransform.splice(i, 1); 
      }
    }
    result = arrTransform;
  } else {
    throw new SyntaxError("'arr' parameter must be an instance of the Array!");
  };

  return result;
}

module.exports = {
  transform
};
