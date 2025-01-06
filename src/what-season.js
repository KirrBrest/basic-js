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
  let season;
  let num = date.getMonth() + 1;
  const check = (date instanceof Date) && !isNaN(date);
  // console.debug(num);
  // console.debug(date);
  // function valid(d) {
  //   return !isNaN(Date.parse(date));
  // }
  if (check) {
    if (num < 3 || num > 11) {
      season = 'winter';
    } else if (2 < num && num < 6) {
      season = 'spring';
    } else if (5 < num && num < 9) {
      season = 'summer';
    } else if (8 < num && num < 12) {
      season = 'autumn';
    } else if (!date) {
      season = 'Invalid date!';
    } else {
      season = 'Invalid date!';
    }
  } else {
    season = 'Invalid date!';
  }
  
  console.debug(date);
  
  console.debug(check);
  console.debug(season);
  return season;
}

module.exports = {
  getSeason
};
