const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR"
    }
    if (end < start) {
        const i = end;
        end = start;
        start = i;
    }
    return ((end * end) - (start * start) + end - start) / 2 + start;
};

// Do not edit below this line
module.exports = sumAll;
