const removeFromArray = function(array, n) {
    let newArray = [];
    for (let i of array) {
        if (i !== n) {
            newArray.push(i);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
