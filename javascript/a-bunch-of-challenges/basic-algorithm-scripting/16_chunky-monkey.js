/* Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    let fullArr = arr;
    let finalArr = [];
  
    while (fullArr.length > 0) {
      var newArr = fullArr.splice(0,size);
      finalArr.push(newArr);
    }
    
    return finalArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/* first aproach
function chunkArrayInGroups(arr, size) {
  let fullArr = arr;
  let newArr = fullArr.splice(0,size);
  console.log(newArr);
  console.log(fullArr);

  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
 */