const toBinary = (number) => number.toString(2);

const isPair = (pair, comparison) => {
  for (var each in pair) {
    if (pair[each] !== comparison[each]) return false;
  }
  return true;
};

const solution = (N) => {
  var binary = toBinary(N);
  var bigGap = 0;
  var gap = 0;

  for (var each = 0; each < binary.length - 1; each++) {
    if (isPair([binary[each], binary[each + 1]], ["0", "0"])) {
      gap += 1;
    }

    if (isPair([binary[each], binary[each + 1]], ["0", "1"])) {
      gap += 1;
      if (gap > bigGap) bigGap = gap;
      gap = 0;
    }
  }

  return bigGap;
};

module.exports = solution;
