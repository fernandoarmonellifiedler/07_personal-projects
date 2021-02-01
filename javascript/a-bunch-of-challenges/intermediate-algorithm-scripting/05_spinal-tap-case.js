/* Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
    let regex = /\s+|_+/g;

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("TheAndyGriffith_Show"))

/* Another solution from FCC*/

function spinalCase(str) {

    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

/* Code Explanation
Split the string at one of the following conditions (converted to an array)
a whitespace character [\s] is encountered
underscore character [_] is encountered
or is followed by an uppercase letter [(?=[A-Z])]
Join the array using a hyphen (-)
Lowercase the whole resulting string*/