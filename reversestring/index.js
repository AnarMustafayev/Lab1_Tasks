// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    size = str.length;
    s='';
    for (let i = size-1;i>=0; i--){
        s= s + str[i];
    }
    return s;
}

module.exports = reverse;
