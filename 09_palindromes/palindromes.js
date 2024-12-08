const palindromes = function (str) {
    let splitString = str.split("");
    console.log(splitString);
    let stringFilter = splitString.filter(char => {return /[a-zA-Z0-9 ]/.test(char);});
    console.log(stringFilter);
    let originalString = stringFilter.join("").split(" ").join("").toLowerCase();
    console.log(originalString)
    let reverseArray = stringFilter.reverse();
    let reverseString = reverseArray.join("").split(" ").join("").toLowerCase();
    console.log(reverseString)
    return reverseString == originalString ;
};
console.log(palindromes("A car, a man, a maraca."))
// Do not edit below this line
module.exports = palindromes;
