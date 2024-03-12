/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  const arr = [];

  // the string may contain different types of characters
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      arr.push(str[i]);
    }
  }

  const A = arr.join('');
  const B = arr.reverse().join('');

  return A === B;
}

module.exports = isPalindrome;
