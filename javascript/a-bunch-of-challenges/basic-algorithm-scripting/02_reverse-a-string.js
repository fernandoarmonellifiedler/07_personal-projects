/*Reverse a String

- Reverse the provided string.
- You may need to turn the string into an array before you can reverse it.
- Your result must be a string.*/

// first solution
function reverseString(str) {
    let letters = [];
    for (let i in str) {
        letters.push(str[i]);
    }
    let reversedString = [];
    for (let j in letters) {
        reversedString.unshift(letters[j]);
    }
    let stringArray = '';
    for (let x in reversedString) {
        stringArray += reversedString[x];
    }
    return stringArray;
}


reverseString("hello")// should become "olleh".
reverseString("Howdy")// should become "ydwoH".
reverseString("Greetings from Earth")// should return "htraE morf sgniteerG".

/* second solution
function reverseString2(str) {
    let revertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revertedString += str[i];
    }
    return revertedString;
}

// hint solution 
function reverseString3(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

reverseString("hello");
*/