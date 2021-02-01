/* Confirm the Ending:
- Check if a string (first argument, str) ends with the given target string (second argument, target).
- This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/


// first solution using a regex constructor
function confirmEnding(str, target) {
    let regex = new RegExp(target + '$');
    return regex.test(str);
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));

// second, using slice method
function confirmEnding2(str, target) {
    let endCharacters = str.slice(str.length - target.length);
    if (endCharacters === target) {
        return true;
    } else {
        return false;
    }
}

// slice method simplified
function confirmEnding2(str, target) {
    return str.slice(str.length - target.length) === target;
}