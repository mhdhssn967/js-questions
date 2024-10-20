function lengthOfLongestSubstring(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentSubstring = '';

        for (let j = i; j < s.length; j++) {
            if (!currentSubstring.includes(s[j])) {
                currentSubstring += s[j];
                maxLength = Math.max(maxLength, currentSubstring.length);
            } else {
                break;
            }
        }
    }

    return maxLength;
}

// Example usage:
const prompt=require('prompt-sync') ({sigint:true})
var input1=prompt("Enter the string ")
console.log(lengthOfLongestSubstring(input1))