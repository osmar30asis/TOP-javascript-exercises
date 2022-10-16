const fibonacci = function(num) {
    let result = 1;
    let previous = 0;

    if (num < 0) return 'OOPS'

    if (num === 0) return 0

    for (let i = 1; i < num; i++) {
        const temp = result;
        result = previous + result;
        previous = temp;
    }
    return result
};
console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
