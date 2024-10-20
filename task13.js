const prompt = require('prompt-sync')({ sigint: true });
var input = prompt("Enter a number: ")

console.log(`Sum of prime numbers upto ${input} : ${primeSum(input)}`);

function isprime(num){
    flag=true
    for(var i=2;i<num;++i){
        if(num%i==0){
            flag=false
        }
    }
    return flag
}

function primeSum(num){
    var sum=0
    for(var i=2;i<=num;++i){
        if(isprime(i)){
            sum+=i
        }
    }
    return sum
}