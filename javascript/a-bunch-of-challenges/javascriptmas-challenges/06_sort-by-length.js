/* Sort by length
Given an array of strings, sort them in orden of increasing lengths
*/

function sortByLength(strs) {
    let newStr = [...strs];
    return newStr.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        } else {
            return 1;
        }
    });
}



const strs = ["abc", "", "aaa", "a", "zz"];
console.log(sortByLength(strs));

/* solution from scrimba live session

function sortByLength(strs) {
    return strs.sort((first, second) => {
    return first.length - second.length
})
}

*/