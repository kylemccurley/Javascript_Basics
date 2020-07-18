function integerToString(num) {
  let number = Math.absolute(num)
  let thousands = Math.floor(num / 1000);
  let hundreds = Math.floor(num  / 100 % 10);
  let tens = Math.floor(num / 10 % 10);
  let ones = Math.floor(num % 10);
  let outcome = '';

  outcome += mapNum(thousands);
  outcome += mapNum(hundreds);
  outcome += mapNum(tens);
  outcome += mapNum(ones);
  return outcome;

  function mapNum(num) {
    if((num -1) < 0) return ''
    const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 
  				 '9'];
    return CHARS[num];
  }
}

/*
Notes:
  - Convert the given number to its absolute value.
    - Set to a new variable
  - Perform translation
  - Is the number less than 0?
    - Return a '-' plus the number's string representation
  - Is the number greater than 0?
    - Return a '+' plus the number's string representation
  - Is the number 0?
    - Return the number's string representation
*/