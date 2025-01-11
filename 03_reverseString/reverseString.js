const reverseString = function(word) {
    let wordArray = word.split("");
    let reverseWordArray = wordArray.reverse();
    return reverseWordArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
