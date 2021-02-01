/* Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */

function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
//console.log(mutation(["hello", "hey"]));


/* Not working solution
function mutation(arr) {
  let arrSplited = arr[1].split('')
  console.log(arrSplited)
  let regex = new RegExp(`ReGeX${arrSplited}ReGeX`);

  return regex.test(arr[0]);
}

mutation(["hello", "hey"]);
console.log(mutation(["hello", "hey"]));

-----------------------------------
second wrong solution
function mutation(arr) {
  let arrSplited = arr[1].split('')
  let newRegex = [];

  for (let i in arrSplited) {
    newRegex.push( arrSplited[i] + "-");
  }

  let lastRegex = newRegex[newRegex.length-1].split('').shift();

  newRegex.pop();
  newRegex.push(lastRegex);

  //console.log(newRegex)
  let a = newRegex.join('');
  console.log(a)

  let regex = new RegExp(`(${a})`,'gi');
  console.log(regex);
  return regex.test(arr[0]);
}

mutation(["hello", "hey"]);

*/
