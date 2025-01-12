const removeFromArray = function (arrayOfNumbers, ...args) {
    let newArray = []
    arrayOfNumbers.forEach(element => {
        if(!args.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
    // return arrayOfNumbers.filter(element => !args.include(element));
};

// Do not edit below this line
module.exports = removeFromArray;
