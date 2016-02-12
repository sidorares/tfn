// see  http://www.mathgen.ch/codes/tfn.html

var weights = [1, 4, 3, 7, 5, 8, 6, 9, 10];
var multiple = 11;

module.exports = function validateTFN(tfn) {
  var digits = tfn.replace(/[^\d]/g, '').split('').map(Number);
  if (digits.length != 9)
    return { valid: false };

  var sum = digits.reduce(function(p, v, i) { return p+v*weights[i]; }, 0);
  var suggestion = 0;
  if (sum == 0 || sum % multiple != 0) {
    suggestion = multiple - 10*( sum - digits[8]*weights[8] ) % multiple;
    digits[8] = suggestion;
    return {
      suggestion: digits.join(''),
      valid: false
    }
  }
  return { valid: true };
};
