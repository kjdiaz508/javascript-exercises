const palindromes = function (text) {
    const isAlphaNum = function(char){
        code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }
    const forwards = text
        .toLowerCase()
        .split('')
        .filter(char => isAlphaNum(char))
        .join('')
    const backwards = forwards.split('').reverse().join('')

    return forwards === backwards;
};

// Do not edit below this line
module.exports = palindromes;
