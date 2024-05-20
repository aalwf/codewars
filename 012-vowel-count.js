// Vowel Count
// Day 12
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

const getCount = (str) =>
  str.split("").filter((char) => "aeiou".includes(char)).length;
