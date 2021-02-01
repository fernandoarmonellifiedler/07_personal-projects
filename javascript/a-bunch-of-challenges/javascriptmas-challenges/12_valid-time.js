/* Valid Time:

Check if the given string is a correct time representation of the 24-hour clock

Example
- For time = "13:58" the output should be true
- For time = "25:51" the output should be false
- For time = "02:76" the output should be false

Hints: parseInt() and split()
*/

function validTime(str) {
    let splittedStr = str.split(":");

    let firstValue = parseInt(splittedStr[0]);
    let secondValue = parseInt(splittedStr[1]);

    if (firstValue > 24 || secondValue > 60) return false;
    else return true;
}

validTime('13:58')
validTime('25:51')
validTime('02:76')