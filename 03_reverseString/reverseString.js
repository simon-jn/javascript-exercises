const reverseString = function(string) {
    splitArray = string.split("")
    reversed = ""
    for (let i = splitArray.length-1; i >= 0; i--) {
        reversed = reversed + splitArray[i]
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
