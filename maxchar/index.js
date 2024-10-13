// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const chalk = require("chalk");

function maxChar(str) {
    let mostCommon = ' ';
    let max = 0;
    for(let s of str){
        let count = 0;
        for (let char of str){
            if(s===char){
                count++;
                if(count>max){
                    max=count;
                    mostCommon = char;
                }
            }

        }
    }
    return mostCommon;
}

module.exports = maxChar;
