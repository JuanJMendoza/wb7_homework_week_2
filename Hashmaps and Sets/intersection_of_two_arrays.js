/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // take out the duplicates from the first array and to be able to search in constant time
  const set1 = new Set(nums1);

  // we'll add to this set so if there are duplicate intersecting elements we only add one
  const retSet = new Set();

  // iterate through array of numbers
  for (let i = 0; i < nums2.length; i++) {
    // if the first list of numbers contains a number in the second list
    if (set1.has(nums2[i])) {
      // add the intersecting number to the return set
      retSet.add(nums2[i]);
    }
  }
  // convert the set back into an array and return it
  return Array.from(retSet);
};
