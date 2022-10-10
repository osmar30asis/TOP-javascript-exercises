const removeFromArray = function(...args) {
    const array = args[0];
    const arrayReturn = [];

    array.forEach(function (element) {
        if (!args.includes(element)) {
            arrayReturn.push(element);
        }
    })
    return arrayReturn;
}
// Do not edit below this line
module.exports = removeFromArray;
