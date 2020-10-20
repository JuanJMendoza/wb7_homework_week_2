/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // holding the number n and it's iterations
  let number = n;
  // set to make sure no number is repeated
  const set = new Set();

  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    // split n into an array of string digits
    let digits = String(n).split("");
    // convert each digit back to a string but squareing each one too
    digits = digits.map((digit) => Number(digit) ** 2);
    // calculate the sum of the square digits
    n = digits.reduce((x, y) => x + y);
  }
  // at this point we know that the number is happy as the loop halted
  return true;
};
