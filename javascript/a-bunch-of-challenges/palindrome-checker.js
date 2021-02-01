/* Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".*/

function palindrome(str) {
    let regex = /\W+|_+|\s+/g;
    let newStr = str.replace(regex, '').toLowerCase();

    let reversedStr = newStr.slice(0).split('').reverse().join('')

    if (newStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}



console.log(palindrome("eye"));
console.log(palindrome('2_A3*3#A2'))
console.log(palindrome('race CAR'))


/* Solution using for loop

function palindrome(str) {
    let regex = /\W+|_+|\s+/g;
    let newStr = str.replace(regex, '').toLowerCase();
    let reversedStr= []

    for (let i = newStr.length -1 ; i >= 0 ; i--) {
      reversedStr.push(newStr[i])
    }
    
    reversedStr = reversedStr.join('');

    if (newStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("eye"));
console.log(palindrome('2_A3*3#A2'))
console.log(palindrome('race CAR'))

*/