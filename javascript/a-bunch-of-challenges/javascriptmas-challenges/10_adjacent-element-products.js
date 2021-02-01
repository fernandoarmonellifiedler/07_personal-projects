/* Adjacent Elements Products

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example
For inputArray = [3, 6, -2, 7, 3], the output should be 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(nums) {
    let product = 0;
    
    for (let i = 1 ; i < nums.length ; i++) {
        
        if (product < nums[i-1] * nums[i]) {
            product = nums[i-1] * nums[i];
            
        }
    }
    return product;
}


adjacentElementsProduct([3, 6, -2, -5, 7, 3])