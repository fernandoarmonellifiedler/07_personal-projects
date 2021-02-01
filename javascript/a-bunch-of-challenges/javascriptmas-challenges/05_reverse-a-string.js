/* Reverse a string
Reverse the provided string.*/

function reverseAString(str) {
    return str.split('').reverse().join('');
};

console.log(reverseAString("hello"));