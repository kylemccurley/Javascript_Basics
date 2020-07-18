function integerToString(num) {
  let number = Math.abs(num)
  let outcome = '';

  let thousands = Math.floor(number / 1000);
  let hundreds = Math.floor(number  / 100 % 10);
  let tens = Math.floor(number / 10 % 10);
  let ones = Math.floor(number % 10);

  outcome += mapNum(thousands);
  outcome += mapNum(hundreds);
  outcome += mapNum(tens);
  outcome += mapNum(ones);

  if (num < 0) {
  	console.log('-' + outcome);
  } else if (num > 0) {
    console.log('+' + outcome);
  } else {
  	console.log('0');
  }

  function mapNum(num) {
    if((num -1) < 0) return ''
    const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 
  				 '9'];
    return CHARS[num];
  }
}

integerToString(4321);
integerToString(-1234);
integerToString(0);