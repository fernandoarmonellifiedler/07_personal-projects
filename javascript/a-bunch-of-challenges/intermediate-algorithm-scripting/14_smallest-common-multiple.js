/* Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.*/

function smallestCommons(arr) {
    let sortArr = arr.sort((a, b) => b - a);
    let rangeArr = []; // [ 5, 4, 3, 2, 1 ]

    for (let i = sortArr[0]; i >= sortArr[1]; i--) {
        rangeArr.push(i)
    }

    let smallest = 0; //5
    let iteration = 1;
    let index;

    while (index !== rangeArr.length) {
        smallest = rangeArr[0] * rangeArr[1] * iteration;
        for (index = 2; index < rangeArr.length; index++) {
            if (smallest % rangeArr[index] !== 0) {
                break;
            }
        }

        iteration++;
    }

    return smallest;
}

smallestCommons([1, 5]);


smallestCommons([1, 5]) //should return a number.
smallestCommons([1, 5]) //should return 60.
smallestCommons([5, 1]) //should return 60.
smallestCommons([2, 10]) //should return 2520.
smallestCommons([1, 13]) //should return 360360.
smallestCommons([23, 18]) //should return 6056820.

/* first approach

// incomplete
function smallestCommons(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let rangeArr = []; // [ 1, 2, 3, 4, 5 ]

    for (let i = sortArr[0]; i <= sortArr[1]; i++) {
        rangeArr.push(i)
    }

    // function to test if its divisible
    let testDivisible = (value, checkNum) => {
        if (checkNum % value === 0) {
            return true;
        } else {
            return false;
        }
    }

    let smallest = sortArr[1]; //5
    let iteration = 0;

    while (!testDivisible(4, smallest)) {

        smallest++
    }

   return smallest;
}

*/