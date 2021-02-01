/* Steamroller

Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {
    return arr
        .reduce((acc, current) => acc.concat(Array.isArray(current) ? steamrollArray(current) : current), []);
}

steamrollArray([1, [2], [3, [[4]]]]);



steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].

//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

/* first incomplete approach

function steamrollArray(arr) {
    let newArr = [...arr];
    //let flatArr = [];

    function flatThis(array) {
        let flatArr = [];

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {

                // ver

            }
        }
    }
    // esto flatea una sola vez
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            flatArr.push(arr[i][j])
        }
    }

    return arr;
}

------------------------------------------
// another incomplete approach

function steamrollArray(arr) {
  console.log(arr[2].length)

  let flatThis = (item) => {
    let newArr = [];
    for (let i in item) {
      //console.log(item[i])
      if (item[i].length > 1) {
        flatThis(item[i])
      } else {
        newArr.concat(item[i])
      }
    }
    return newArr;
  }

  return flatThis(arr);
}


*/