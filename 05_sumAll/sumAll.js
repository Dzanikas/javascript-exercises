const sumAll = function(x, y) {
    // const min = x;
    // const max = y;
    let sum = 0;
    let i = 1;
    let min = 0;
    let max = 0;
    
    if (!Number.isInteger(x) || !Number.isInteger(y)) {return "ERROR"}
    if (x <= 0 || y <= 0) {return "ERROR"}
    
    if (y >= x) {
        min = x;
        max = y;
    } else {
        min = y;
        max = x;
    };

    while (i) {
        if (i >= min && i <= max) {
            sum += i;
        };
        i++;
        if (i==max+1) {break;};
    }
    return sum;
};
console.log(sumAll(-10, 4))
// Do not edit below this line
module.exports = sumAll;
