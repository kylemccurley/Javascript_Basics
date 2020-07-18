const readline = require("readline-sync");
regex = /[^a-z]/ig

/* Prompt the user to enter a phrase */
let phrase = String(readline.question("Please enter a phrase: "));

/* Calculate the length of all word-boundary letters. */
phrase_size = phrase.replace(regex, '').length;

/* Display Results */
console.log(`There are ${phrase_size} characters in "${phrase}".`);