const prompt = require('prompt-sync')({ sigint: true });
var inputString = prompt("Enter the string: ")

function getPermutations(str){
    if(str.length==1) {
        return[str];
    }

    const permutations = [];
    
    for (let i=0;i<str.length;i++) {
        const currentChar=str[i];
        const remainingChars=str.slice(0,i)+str.slice(i+1);

        const remainingPermutations=getPermutations(remainingChars);

        for (const perm of remainingPermutations) {
            permutations.push(currentChar + perm);
        }
    }

    return permutations;
}

const result = getPermutations(inputString);

console.log(result);
