var lengthOfLastWord = function(s) {
    let i = s.length - 1;

    // Skip spaces at the end
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    let count = 0;

    // Count characters of the last word
    while (i >= 0 && s[i] !== " ") {
        count++;
        i--;
    }

    return count;
};