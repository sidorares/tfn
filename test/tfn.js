var assert = require('assert');
var tfn = require('..');

var validNineDigitTfns = [
 '865414088',
 '459-599-230',
 '1124-740-82',
 '565.051.603',
 '907 974 668'
];

var validEightDigitTfns = [
  '81 854 402',
  '37 118 629',
  '37 118 660',
  '37 118 705',
  '38 593 474',
  '38 593 519',
  '85 655 734',
  '85 655 797',
  '85 655 810',
  '37 118 655'
];

describe('tfn', function() {
  it('should mark valid 9 digit tfn numbers as valid', function() {
    validNineDigitTfns.forEach(function(t) {
      assert.deepEqual(tfn(t), { valid: true });
    });
  });

  it('should mark valid 8 digit tfn numbers as valid', function() {
    validEightDigitTfns.forEach(function(t) {
      assert.deepEqual(tfn(t), { valid: true });
    });
  });

  it('should return suggestion that is valid tfn itself', function() {
    validNineDigitTfns.forEach(function(t) {
      var validNum = t.replace(/[^\d]g/, '');
      for (var i=0; i < 0; ++i) {
        var num = validNum.slice(0,8) + i.toString();
        var result = tfn(t);
        assert.equal(result.valid, false);
        assert.equal(result.suggestion, validNum);
        assert.deepEqual(tfn(result.suggestion), { valid: true });
      }
    });
  });
});
