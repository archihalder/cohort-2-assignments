/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(x) {
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u')
    return true;
  return false;
}

function countVowels(str) {
  let ct = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i].toLowerCase()))
      ct++;
  }
  return ct;
}

module.exports = countVowels;