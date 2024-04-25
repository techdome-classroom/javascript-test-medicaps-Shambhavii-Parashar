function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  const set = new Set();
    for (let num of nums) {
        if (num > 0) {
            set.add(num);
        }
    }
    let missing = 1;
    while (set.has(missing)) {
        missing++;
    }
    return missing;

}

module.exports = smallestMissingPositiveInteger;