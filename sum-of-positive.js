// Sum Of Positive
// Day 6
// https://www.codewars.com/kata/53369039d7ab3ac506000467

const positiveSum = (...arr) =>
  arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);
