/* Alphabet subsequence 

Check wheter the given string is a subsequence of the plantext alphabet

Example:
For s = "effg" or s = "cdce", the output should be false
For s = "ace" or s = "bxz", the output should be true

Hints: size property, chatCodeAt(), split()
*/

function alphabetSubsequence(str) {
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let newStr = str.split('');

    let indexStr = [];

    for (let i = 0; i < newStr.length; i++) {
        indexStr.push(alpha.indexOf(newStr[i]));
    }
    
    for (let i in indexStr) {
        if (indexStr[i] === indexStr[i-1]) {
            return false;
        }
        if (indexStr[i] < indexStr[i-1]) {
            return false;
        }
    }
    return true;
}

console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
