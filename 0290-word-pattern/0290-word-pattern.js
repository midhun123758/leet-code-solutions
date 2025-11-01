/**
 * @param {string} letter
 * @param {string} word
 * @return {boolean}
 */
var wordPattern = function(letter, word) {
  let se = word.split(" ");      // split words properly (not by letters)
  let mmain = [];
  let val = letter.split("");    // split pattern letters

  if (val.length !== se.length) {
    return false; // number of letters and words must match
  }

  let map = {};
  let used = new Set();

  for (let i = 0; i < val.length; i++) {
    if (map[val[i]]) {
      if (map[val[i]] !== se[i]) {
        return false;
      }
    } else {
      if (used.has(se[i])) {
        return false;
      }
      map[val[i]] = se[i];
      used.add(se[i]);
    }
  }

  return true;
};
