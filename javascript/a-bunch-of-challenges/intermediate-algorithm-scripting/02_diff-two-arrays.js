/* Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.*/

// first solution

function diffArray(arr1, arr2) {
    var newArr = [];
    let mayArr
    let minArr

    if (arr1.length > arr2.length) {
        mayArr = [...arr1];
        minArr = [...arr2];
    } else if (arr1.length < arr2.length) {
        mayArr = [...arr2];
        minArr = [...arr1];
    } else {
        mayArr = [...arr1];
        minArr = [...arr2];
    }

    for (let i in mayArr) {
        if (minArr.indexOf(mayArr[i]) === -1) {
            newArr.push(mayArr[i]);
        }
    }
    for (let i in minArr) {
        if (mayArr.indexOf(minArr[i]) === -1) {
            newArr.push(minArr[i]);
        }
    }

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* solution using filter method

function diffArray(arr1, arr2) {
  var newArr = [...arr1, ...arr2]
    .sort((a,b) => a - b)
    .filter((value, index, self) => {
  return self.indexOf(value) === index;
})
    
  var newArr2 = [];
  


  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

-----------------------------------
another filter solution

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


-----------------------------------

Solution using two for loops:

function diffArray(arr1, arr2) {
  var newArr = [];
  
  for (let i = 0 ; i < arr1.length ; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }

  for (let i = 0 ; i < arr2.length ; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i])
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/