// Complementary DNA
// Day 1
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const DNAStrand = (dna) => dna.replace(/./g, (m) => "CGAT"["GCTA".indexOf(m)]);
