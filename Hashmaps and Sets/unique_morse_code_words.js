/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  // make a mapping between characters and their morse code representations
  const map = new Map();
  // using a set to keep track of uniqueness
  const morseCodeWords = new Set();
  // array of morse code
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  // init mappings
  for (let char = 0; char < 26; char++) {
    // transform ascii value to char form
    const asciiChar = String.fromCharCode(97 + char);
    map.set(asciiChar, morseCode[char]);
  }

  // for each word in the list of words...
  for (let i = 0; i < words.length; i++) {
    // lavel current word
    const word = words[i];
    // create a 'string builder' array
    let stringBuilder = [];

    // for each letter in the word...
    for (let char = 0; char < word.length; char++) {
      // find the representative morse code version of it
      const morseCode = map.get(word[char]);
      // push this morse code 'char' into the string builder array
      stringBuilder.push(morseCode);
    }
    // at this point we finished building the current word in morse code so we join the array with a closed space
    stringBuilder = stringBuilder.join("");
    // we overwrite the current word with this joined array (same word in morse code)
    morseCodeWords.add(stringBuilder);
  }
  // return the given array of words, all words have been overwritten with their morse code counterparts
  return morseCodeWords.size;
};
