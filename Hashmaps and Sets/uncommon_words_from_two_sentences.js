/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  // make a counter map, to make words to their quantity
  const map = new Map();
  // init returning array
  const retArr = [];

  // conjoin the arrays of seperated words of each sentences A and B into the words array and convert into a set
  const words = A.split(" ").concat(B.split(" "));

  // init map and the qunantity of each word
  for (let i = 0; i < words.length; i++) {
    if (!map.has(words[i])) {
      map.set(words[i], 0);
    }
    map.set(words[i], map.get(words[i]) + 1);
  }
  // check for unique words
  for (let key of map.keys()) {
    if (map.get(key) === 1) {
      retArr.push(key);
    }
  }
  return retArr;
};
