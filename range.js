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