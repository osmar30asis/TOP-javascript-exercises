const palindromes = function (text) {
    let modified = text.replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, "").toLowerCase();

    let reverse = '';
    const textLength = text.length;
    for (let i = textLength - 1; i>=0; i--) {
        reverse += text[i];
    }

    reverse = reverse.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "").toLowerCase();

    let result;
    if (modified == reverse) {
        result = true;
    } else result = false;
    return result
};
palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
