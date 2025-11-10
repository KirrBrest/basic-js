const { NotImplementedError } = require('../lib');

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
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    return 'Invalid date!';
  }

  const time = date.getTime();

  if (Number.isNaN(time)) {
    return 'Invalid date!';
  }

  const month = date.getMonth();

  if (month === 11 || month <= 1) {
    return 'winter';
  }

  if (month >= 2 && month <= 4) {
    return 'spring';
  }

  if (month >= 5 && month <= 7) {
    return 'summer';
  }

  return 'autumn';
}

module.exports = {
  getSeason
};
