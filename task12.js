const prompt = require('prompt-sync')({ sigint: true });
var input = prompt("Enter a number: ")

function isprime(num){
    flag=true
    for(var i=2;i<num;++i){
        if(num%i==0){
            flag=false
        }
    }
    return flag
}

console.log(isprime(input));
