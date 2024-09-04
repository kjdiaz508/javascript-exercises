const repeatString = function(text, times) {
    let repeatedstring = "";
    if (times < 0) {
        return "ERROR"
    }
    for (let i=0; i < times; i++){
        repeatedstring = repeatedstring + text;
    }
    return repeatedstring;
};

// Do not edit below this line
module.exports = repeatString;
