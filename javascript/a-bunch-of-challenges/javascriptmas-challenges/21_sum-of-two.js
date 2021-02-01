/* Sum of two 

You have two integer arrays, a and b, and an interger target value v. Determine wheter there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exist, otherwise return false.

Example:
For a = [1,2,3], b = [10,20,30,40] and v = 42 the output should be true

Hint: hasOwnProperty();
*/
function sumOfTwo(nums1, nums2, value) {
    for (let i in nums1) {
        for (let j in nums2) {
            console.log(nums1[i] + nums2[j])
            if (nums1[i] + nums2[j] === value) {
                return true;
            }
        }
    }
    return false
}

const nums1 = [1, 2, 3];
const nums2 = [10, 20, 30, 40];
const value = 42;

console.log(sumOfTwo(nums1, nums2, value));// true