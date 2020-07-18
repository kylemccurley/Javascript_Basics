function parseInt(str) {
  const INDEX_LIMIT = str.length;
  const UNIT_CONVERSION = generateConversion(INDEX_LIMIT);
  const REVERSED_STRING = reverseChars(str);

  let outcome = 0;
  let reversed_string = reverseChars(str);

  for(i=0; i < INDEX_LIMIT; i++) {
    let digit_str = REVERSED_STRING.charAt(i);
    let digit_num = digit_str.charCodeAt(0) - 48;
    let digit_expanded = digit_num * UNIT_CONVERSION[i];

    outcome += (digit_expanded);
  }

  return outcome;

  function reverseChars(str) {
    let reversed_string = '';
    let string_length = str.length;

    for (i=(string_length - 1); i > -1; i--) {
      reversed_string += str.charAt(i);
    }

    return reversed_string;
  }

  function generateConversion(size) {
    let outcome = []
    let base_number = 1;

    for(i=0; i < size; i++) {
      outcome.push(base_number);
      base_number *= 10;
    }

    return outcome
  }
}

parseInt('4321');      // 4321
parseInt('570');       // 570