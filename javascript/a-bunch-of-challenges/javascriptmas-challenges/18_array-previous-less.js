/* Array previous less

Given an array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value.
Store that value at position i in the answer. If no such value can be found, store -1 instead.

Example:
For items = [3,5,2,4,5] the output should be [-1,3,-1,2,4]

Hints: unshift()
*/

function arrayPreviousLess(nums) {
    let arr = [];
    for (let i in nums) {
        console.log(nums[i])
        if (nums[i] > nums[i - 1]) {
            arr.push(nums[i - 1]);
        }
        else {
            arr.push(-1);
        }
    }
    return arr;
}


const nums = [3, 5, 2, 4, 5];
console.log(arrayPreviousLess(nums)) // [-1, 3, -1, 2, 4]