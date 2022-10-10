const reverseString = function(string) {
    let chars = string.length
    let text = ''
    for (let i = 0; i < chars; i++) {
        text += string[chars - i - 1]
    }
    return text
};
console.log('hi'.length)
// Do not edit below this line
module.exports = reverseString;
