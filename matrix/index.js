// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const { mkdirSync } = require("graceful-fs");

function matrix(n) {
    
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    let num = 1;

    while (left <= right && top <= bottom) {
        for (let j = left; j <= right; j++) {
            arr[top][j] = num++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = num++;
        }
        right--;
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                arr[bottom][j] = num++;
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                arr[i][left] = num++;
            }
            left++;
        }
    }

    return arr; 
}
console.log(matrix(5))
module.exports = matrix;
