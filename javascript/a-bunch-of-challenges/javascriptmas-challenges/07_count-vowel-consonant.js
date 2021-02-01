/* Count vowel consonant

given a string s that consists of only lowercase English letters. If vowels are given a value of 1 and consonants are 2 return the sum of all letters in the input string.

For s = "abcde" the outuput should be 8*/

function countVowelConsonant(str) {
    return str.split('').reduce((sum,item) => {
        if (item === "a" || item === "e" || item === "i" || item === "o" || item === "u") {
            return sum + 1;
        } else {
            return sum + 2;
        };
    }, 0)
};

console.log(countVowelConsonant("abcde"));

/*
function countVowelConsonant(str) {
    return str.split('').reduce((sum,item) => {
        if (item === "a" || item === "e" || item === "i" || item === "o" || item === "u") {
            return sum + 2;
        } else {
            return sum + 1;
        };
    }, 1);
}

const result = letters.reduce((totalSum, letter) => {
    if (vowel.includes(letter)) {
    return totalSum += 1
} else {
    return totalSum += 2
}
})
*/