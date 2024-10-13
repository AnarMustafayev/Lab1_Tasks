// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i= 1; i<=n;i++){
        let shape = '';
        for (let j=0;j<i; j++){
            shape = shape +'#';
        }
        for(let k =i; k<n; k++){
            shape = shape + ' ';
        }
        console.log(shape);
    }
}


module.exports = steps;
