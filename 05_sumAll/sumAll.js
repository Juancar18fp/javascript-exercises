const sumAll = function (first, last) {
    if (first < 0 || last < 0 || !Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";
    if (first > last) {
        let temp = first;
        first = last;
        last = temp;
    }
    return (last * (last + 1) / 2) - (first * (first - 1) / 2);
};

// Do not edit below this line
module.exports = sumAll;
