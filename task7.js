const prompt = require('prompt-sync')({ sigint: true });
var input1 = prompt("Enter the first number: ")
var input2 = prompt("Enter the last number: ")

function isprime(num){
    flag=true
    for(var i=2;i<num;++i){
        if(num%i==0){
            flag=false
        }
    }
    return flag
}
for(var i=input1;i<=input2;i++){
    if(isprime(i))
        console.log(i);
}
