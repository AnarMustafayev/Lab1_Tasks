// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let number = 0;
    let m =1;
    if (n<0){
        m=-1;
        n = -1*n;
    }
    while (n !== 0) {  
        number *= 10;  
        number += n % 10;  
        n = Math.floor(n / 10);  
    }
    return m*number;
}
module.exports = reverseInt;
