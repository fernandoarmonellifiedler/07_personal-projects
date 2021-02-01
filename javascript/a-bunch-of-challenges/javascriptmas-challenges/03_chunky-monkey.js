/* Chumky monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array*/

function chunkyMonkey(values, size) {
    //  write code here.
    let finalArr = []
    let newArr = values.slice(0, size);
    let newArr2 = values.slice(size);
    finalArr.push(newArr, newArr2);

    return finalArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2))
