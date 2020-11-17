/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // ==== Algorithm ====
  // for 2 strings to be isomorphic characters in one string can be replaced with characters in the other to get that string
  // i.e: egg -> add, this is because e is mapped to a and g is mapped to d, now if we replace each character mapped to characters to s, we'd get t.

  // make 2 maps to map each character in s to characters in t and vice versa
  const map1 = new Map();
  const map2 = new Map();

  // since both strings are guarenteed to be equal length we iterate through either string
  for (let i = 0; i < s.length; i++) {
    // check if the current character in s is not in map1 and the current character in t is not in map2, if both are true...
    if (!map1.has(s[i]) && !map2.has(t[i])) {
      // init the current character in s as a key and its value the current character in t in map1 and vice versa for map2
      map1.set(s[i], t[i]);
      map2.set(t[i], s[i]);
    }

    // otherwise, check if the character mapped to s is the current character in t and vice versa, if not
    else if (map1.get(s[i]) !== t[i] && map2.get(t[i]) !== s[i]) {
      // return false
      return false;
    }
  }

  // return true since each checked character is mapped to the same character in the other string throughout the iteration
  return true;
};
