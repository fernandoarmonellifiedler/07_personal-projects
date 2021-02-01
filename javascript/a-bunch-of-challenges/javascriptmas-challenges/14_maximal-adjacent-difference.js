/* Maximal adjacent difference

Given an array of integers, find the maximal absolute difference between any two of its adjacent elements

Example:
For inpuArray = [2,4,1,0] the output should be 3
For inpuArray = [2,9,1,0] the output should be 8

Hints: Math.abs()
*/

function arrayMaximalAdjacentDifference(nums) {
    let maxDif = 0;
    for (let i = 0 ; i < nums.length ; i++) {
        if (maxDif < Math.abs(nums[i-1], nums[i])) {
            maxDif = Math.abs(nums[i-1], nums[i]) - 1;
        }
    }
    return maxDif;
}



let nums = [2, 4, 1, 0];
console.log(arrayMaximalAdjacentDifference(nums)) // 3
let nums2 = [2, 9, 1, 0];
console.log(arrayMaximalAdjacentDifference(nums2)) // 8