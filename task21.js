function isValidNumber(str) {
    const num = parseFloat(str);

    if (!isNaN(num) && isFinite(num) && str.trim() !== '') {
        return true;
    } else {
        return false;
    }
}

const prompt=require('prompt-sync') ({sigint:true})
var input1=prompt("Enter the number ")
console.log(isValidNumber(input1))
