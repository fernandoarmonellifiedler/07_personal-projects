/* Extract each Kth 

Given array of integers, remove each Kth element from it

Example:
For inputArray = [1,2,3,4,5,6,7,8,9,10] and k = 3, the output should be [1,2,4,5,7,8,10]

Hint: filter()
*/

function extractEachKth(nums, index) {
    return nums.filter( item => item % index !== 0 )
}


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = 2;

console.log(extractEachKth(nums, index)); // result [1, 2, 4, 5, 7, 8, 10]