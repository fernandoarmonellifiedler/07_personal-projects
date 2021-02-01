/* Insert dashes 

Transform a given sentence into a new one with dashes between each two consecutive letters.

Example:
For input = "aba caba", the output should be "a-b-a c-a-b-a"

Hints: Join() and split()
*/

// first solution
function insertDashes(arr) {
    let splitedValue = arr.split(' ')
    let newArr = []
    
    for (let i in splitedValue) {
        let subSplit = splitedValue[i].split('').join("-");
        newArr.push(subSplit);
    }
    
    return newArr.join(' ')
}

// solution detecting if arr has not empty spaces
function insertDashes(arr) {
    if (arr.indexOf(" ")) {
        let splitedValue = arr.split(' ')
        let newArr = []
    
        for (let i in splitedValue) {
            let subSplit = splitedValue[i].split('').join("-");
            newArr.push(subSplit);
        }
    
        return newArr.join(' ')
    }
    else {
        return arr.split('').join("-")
    }
    
}






const value = "aba caba";

console.log(insertDashes(value)); // "a-b-a c-a-b-a"