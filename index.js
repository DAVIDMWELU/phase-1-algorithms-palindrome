function isPalindrome(word) {
  // Normalize the string by converting to lowercase
  const normalizedWord = word.toLowerCase();
  
  // Reverse the string
  const reversedWord = normalizedWord.split('').reverse().join('');
  
  // Check if the word is the same forwards and backwards
  return normalizedWord === reversedWord;
}

/* 
  Pseudocode explanation:
  1. Normalize the input by converting the string to lowercase.
  2. Reverse the string.
  3. Compare the original string with the reversed string.
  4. Return true if they are the same, otherwise return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
