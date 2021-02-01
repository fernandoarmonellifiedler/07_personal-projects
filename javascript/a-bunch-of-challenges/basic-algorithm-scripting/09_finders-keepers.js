/* Finders Keepers:

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.*/

function findElement(arr, func) {
    let num = 0;
    for (let i in arr) {
        num = arr[i];
        if (func(num)) return arr[i];
    }
    return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Solution with find method:

function findElement(arr, func) {
    return arr.find(func);
}

//Solution with map method:

function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}