const repeatString = function(string, num) {
    let text = ""
    while (num) {
        if (num < 0) {return "ERROR"; break;}
        text += string;
        num--;
    }
    return text;
    
};

// Do not edit below this line
module.exports = repeatString;
