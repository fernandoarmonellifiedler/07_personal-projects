/* Avoid obstacles:

You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping form the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump to avoid all the obstacles.

Example: 
For inputArray = [5, 3, 6, 7, 9] the output should be = 4.

Hints: sort() and every().
*/

function avoidObstacles(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    while (true) {
        for (let i = 1; i < nums.length; i++) {
            //console.log(i)
            if (nums.every(item => item % i !== 0)) {
                return i
            }
        }
    }
}


const nums = [5, 3, 6, 7, 9];

// act
const result = avoidObstacles(nums);


/* non working solution
function avoidObstacles(nums) {
    let sortedNums = nums.sort((a, b) => a - b);

    let jumper = 1;
    for (let i = 0 ; i < nums.length ; i++) { // primero pasa por 3, luego 5...
        console.log(i)
        for (let j = 0 ; j <= nums[i] ; j += jumper) { // en cada uno se queda 5 veces
            console.log(nums[i], j)


        }//1er for
        jumper++
    }//2do for


}

avoidObstacles([5, 3, 6, 7, 9]); // 4

*/