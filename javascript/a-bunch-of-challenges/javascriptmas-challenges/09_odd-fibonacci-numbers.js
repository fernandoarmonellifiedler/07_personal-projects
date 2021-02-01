/* Sum odd Fibonacci numbers

Given a positive interger num, return the sum of all Fibonacci numbers that are less or equal to num

The first two numbers are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3 and 5.*/

function sumOddFibonacciNumbers(num) {
    let fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;

    for (let i = 2 ; i <= num ; i++) {
        fibArray[i] = fibArray[i-2] + fibArray[i-1];
    }

    let fibOddNums = (arr,num) => {
        let sumTotal = 0;
        for (let i = 0 ; i < arr.length ; i++) {
            if (arr[i] % 2 !== 0 && arr[i] <= num) {
                sumTotal += arr[i];
            }
        }

        return sumTotal;
    }

    return fibOddNums(fibArray, num);
}



console.log(sumOddFibonacciNumbers(10))
console.log(sumOddFibonacciNumbers(1000))