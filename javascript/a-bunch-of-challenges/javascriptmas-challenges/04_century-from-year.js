/* Century from year
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from year 101 up to and including the year 200, etc.

For year = 1905 the output should be 20 */

function centuryFromYear(num) {
    if (Math.floor(num/100) === num/100) {
        return Math.floor(num/100);
    } else {
        return Math.floor(num/100) + 1;
    }
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
