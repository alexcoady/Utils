/**
 *  Range maps one range of numbers to another
 *
 *  @function rangeFunc
 *  @param {Number} inputFrom Start number of range
 *  @param {Number} inputTo End number of range
 *  @param {Number} inputFrom Start number of domain
 *  @param {Number} inputTo End number of domain
 *  @return {Function} Range function
 *
 *  Usage
 *  
 *  `var rangeX = rangeFunc(1,10,1,100);`
 *  `var mappedNumber = rangeX(5)` // 50
 */
function rangeFunc ( inputFrom, inputTo, outputFrom, outputTo ) {
  
  var range, domain, multiplier;
  
  range = {
    "difference": inputTo - inputFrom,
    "modifier": inputFrom * -1
  };

  domain = {
    "difference": outputTo - outputFrom,
    "modifier": outputFrom
  };

  multiplier = (domain.difference / range.difference);

  return function (value) {

    value += range.modifier;
    value = value * multiplier;
    value += domain.modifier;

    return value;
  }
}