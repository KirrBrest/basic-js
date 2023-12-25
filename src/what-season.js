const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let season;
  if (date[1] < 3 || date[1] > 11) {
    season = 'winter';
  } else if (2 < date [1] < 6) {
    season = 'spring';
  } else if (5 < date [1] < 9) {
    season = 'summer';
  } else if (8 < date [1] < 12) {
    season = 'fall';
  } else {
    season = 'Invalid date!';
  }

  return season;
}

module.exports = {
  getSeason
};
