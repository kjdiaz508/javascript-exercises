const reverseString = function(text) {
    let backwards = "";
    for (let i=text.length - 1; i >= 0; i--){
        backwards = backwards + text[i];
    }
    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
