/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/

function titleCase(str) {
    let newStr = str.toLowerCase().split(' ');
    let upperCasedArr = [];
    for (let i in newStr) {
      let regex = /[^.]/
      let fragStr = newStr[i].replace(regex,newStr[i][0].toUpperCase());
      upperCasedArr.push(fragStr);
    }
    
    return upperCasedArr.join(' ');
  }
  
  titleCase("I'm a little tea pot");
  console.log(titleCase("I'm a little tea pot"));

/* 
function titleCase(str) {
  let newStr = str.toLowerCase().split(' ');
  console.log(newStr)
  for (let i in newStr) {
     newStr[i].charAt(0).toUpperCase();
     console.log(newStr[i].charAt(0).toUpperCase())
  }
  console.log(newStr)
  return newStr.join(' ');
}

titleCase("I'm a little tea pot");


function titleCase(str) {
  let newStr = str.toLowerCase().split(' ');
  for (let i in newStr) {
    let newStrSplitted = newStr[i].split('')
    console.log(newStrSplitted)
    let fragSplit =  newStrSplitted[0].toUpperCase();
    console.log(fragSplit)
    newStrSplitted.slice(0,1,fragSplit)
    console.log(newStrSplitted)
  }
  
  return newStr.join(' ');
}
*/