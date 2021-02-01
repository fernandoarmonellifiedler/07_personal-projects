/* Sum All Numbers in a RangePassed
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

function sumAll(arr) {
    let newArr = [...arr].sort((a, b) => a - b)
    let fullArr = [];

    for (let i = newArr[0]; i <= newArr[1]; i++) {
        fullArr.push(i);
    }

    return fullArr
        .reduce((sum, number) => sum + number)
}

sumAll([1, 4]);
console.log(sumAll([1, 4]))