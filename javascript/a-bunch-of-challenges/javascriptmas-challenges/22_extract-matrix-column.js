/* Extract matrix column 

Given a rectangular matrix (an array of arrays) and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one)

Example:
For matrix = [[1,1,1,2], [0,5,0,4], [2,1,3,6]] and column = 2, the output should be [1,0,3]

Hints: push()
*/
function extractMatrixColumn(matrix, column) {
    let arr = [];
    for (let i in matrix) {
        arr.push(matrix[i][column]);
    }
    return arr;
}


const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
const column = 2;

console.log(extractMatrixColumn(matrix, column));// [1, 0, 3]