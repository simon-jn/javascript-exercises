const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR"
    } else if (times == 0) {
        return ""
    }
    let repeated = word;
    for (let i = 0; i < times-1; i++) {
        repeated += word
    }
    return repeated
};

// Do not edit below this line
module.exports = repeatString;
