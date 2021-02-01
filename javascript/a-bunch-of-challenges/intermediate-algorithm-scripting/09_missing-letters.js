/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
    let abcdary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let startIndex = abcdary.indexOf(str[0]);
    let endIndex = abcdary.length - str.length + 1;

    for (let i = startIndex; i < endIndex + 1; i++) {
        if (abcdary[i] != str[i - startIndex]) {
            return abcdary[i];
        }
    }

    return undefined;
}

fearNotLetter("abce");


fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
fearNotLetter("stvwx") //should return "u".
fearNotLetter("bcdf") //should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.