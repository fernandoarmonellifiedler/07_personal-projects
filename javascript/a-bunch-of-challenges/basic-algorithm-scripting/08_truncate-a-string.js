/* Truncate a String:

- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
  let newString = str.split('');
  let difference = str.length - num;

  if (str.length > num) {
    for (let i = 0; i < difference; i++) {
      newString.pop();
    }
    return newString.join('') + '...';
  };
  if (str.length === num || str.length < num) {
    for (let i = 0; i < difference; i++) {
      newString.pop();
    }
    return newString.join('');
  }

}

//truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));


/* this also works:

function truncateString(str, num) {
  let newString = str.split('');
  let difference = str.length - num;

  for (let i = 0 ; i < difference ; i++) {
      newString.pop();
    }
  
  if (str.length > num) {
    return newString.join('') + '...';
  }; 
  if (str.length === num || str.length < num) {
    return newString.join('');
  }

}

Resolution with slice method:

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

*/