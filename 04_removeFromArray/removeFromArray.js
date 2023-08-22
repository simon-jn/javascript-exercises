const removeFromArray = function(inputArray, args) {
    //Loop through the input arguments
    for (let i = 1; i < arguments.length; i++) {
        var remove = arguments[i]
        var idx = inputArray.indexOf(remove);
        while (idx != -1) {
            inputArray.splice(idx, 1)
            idx =inputArray.indexOf(remove);
        }
        
    }

    return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;
