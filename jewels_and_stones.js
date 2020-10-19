/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  // turn the the string J into a list of chars
  let jewels = J.split("");
  // now turn the list of chars(jewels) into a set for constant time look up
  jewels = new Set(jewels);
  // init counter to count the jewels in S
  let counter = 0;

  // iterate through the string S
  for (let i = 0; i < S.length; i++) {
    // label current stone
    const stone = S[i];

    // check if the stone is a jewel
    if (jewels.has(stone)) {
      // incrememnt counter
      ++counter;
    }
  }
  return counter;
};
