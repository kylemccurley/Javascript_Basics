/*
  - Convert the given string to a string without a sign.
  - Perform parseInt Operations

  - If the sign is negative:
    - Return 0 - int number
  - Othrwise:
    - Return the number
*/

function parseInt(str) {
  const NUMBER = processString(str);
  const INDEX_LIMIT = NUMBER[1].length;
  const UNIT_CONVERSION = generateConversion(INDEX_LIMIT);
  const REVERSED_STRING = reverseChars(NUMBER[1]);
  let outcome = 0;

  for(i=0; i < INDEX_LIMIT; i++) {
    let digit_as_str = REVERSED_STRING.charAt(i);
    let digit_as_num = digit_as_str.charCodeAt(0) - 48;
    let digit_expanded = digit_as_num * UNIT_CONVERSION[i];

    outcome += (digit_expanded);
  }

  return (NUMBER[0] == '-') ? -(outcome) : outcome;

  /* Nested Function Section */

  function processString(str) {
    let outcome = [];
    const sign_candidate = str[0];

    if (sign_candidate === '-') {
      outcome.push('-');
      outcome.push(str.slice(1, str.length));
    } else {
      outcome.push('+');
      if (sign_candidate === '+') {
        outcome.push(str.slice(1, str.length));
      } else {
        outcome.push(str.slice(0, str.length));
      }
    }
    return outcome;
  }

  function reverseChars(str) {
    let reversed_string = '';
    let string_length = str.length;

    for (i=(string_length - 1); i > -1; i--) {
      reversed_string += str.charAt(i);
    }

    return reversed_string;
  }

  function generateConversion(size) {
    let outcome = [];
    let base_number = 1;

    for(i=0; i < size; i++) {
      outcome.push(base_number);
      base_number *= 10;
    }

    return outcome
  }
}

console.log(parseInt('123'));
console.log(parseInt('+123'));
console.log(parseInt('-123'));
