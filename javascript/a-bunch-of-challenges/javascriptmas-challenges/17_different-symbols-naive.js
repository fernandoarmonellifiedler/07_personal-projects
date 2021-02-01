/* Different symbols naive

Given a string, find the number of different characters in it

Example:
For s = "cabca", the output should be 3

There are 3 different characters: a, b and c.

Hints: includes(), split(), push()

---
Extra: how many solutions can you make?
- Lodash?
- Set?
- While loop?
- For loop?
- Objects?
- Arrays?

Its important to add more unit tests: numbers, symbols, mix of numbers and letters, maximum length, empty string, null.
*/

function differentSymbolsNaive(str) {
    let newStr = str.split('');
    let arr = [];
    
    for (let i in newStr) {
        if (!arr.includes(newStr[i])) {
            arr.push(newStr[i])
        }
    }
    return arr.length;
}


const str = 'cabca';
console.log(differentSymbolsNaive(str)); // 3