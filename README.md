# tfn

[![Greenkeeper badge](https://badges.greenkeeper.io/sidorares/tfn.svg)](https://greenkeeper.io/)
validate Australian Tax File Number

## usage:
```
  npm install tfn
```


```js
var tfn = require('tfn');
//...
var tfnStatus = tfn('123 456 789');
console.log(tfnStatus);
// logs { valid: false, suggestion: '123456782' }

```
## See also
  - https://en.wikipedia.org/wiki/Tax_file_number
  - http://www.mathgen.ch/codes/tfn.html
  - [australian-business-number](https://github.com/sidorares/australian-business-number) - validate ABN
  - [australian-tax-rate](https://github.com/sidorares/australian-tax-rate) - calculate tax rate based on taxable income
