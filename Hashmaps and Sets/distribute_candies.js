/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  // get all unique candies
  const set = new Set(candies);

  // return the number of all unique candies or half the amount of candies(in the case where there are exactly half the amount of unique candies or all are duplicates)
  return Math.min(set.size, candies.length / 2);
};
