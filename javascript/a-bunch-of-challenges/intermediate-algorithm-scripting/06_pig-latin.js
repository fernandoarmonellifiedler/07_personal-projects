/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
    let rgxVowel = /^[aieou]/i;
    let rgxConsonant = /^[^aieou]+/i;

    if (str.match(rgxVowel)) {
        // add "way" at the end
        console.log("Its a vowel");
        return str + "way";
    }
    if (str.match(rgxConsonant)) {
        // move consonant to end of the word and add "ay"
        console.log("Its a consonant");
        let splicedLetter = str.match(rgxConsonant);// gl
        return str.split('').splice(splicedLetter[0].length).join('') + splicedLetter + "ay";
    }
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));