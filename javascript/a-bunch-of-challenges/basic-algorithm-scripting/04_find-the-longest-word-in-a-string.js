/* Find the Longest Word in a String:
- Return the length of the longest word in the provided sentence.

- Your response should be a number. */

function findLongestWordLength(str) {
    let array = str.split(' ');
    let maxNum = 0;
  
    for (let i = 0 ; i < array.length ; i++) {
      if (maxNum < array[i].length) {
        maxNum = array[i].length;
      }
    }
    return maxNum;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));