const prompt=require('prompt-sync') ({sigint:true})
var input=prompt("Enter a Number : ")

var num=Number(input)
var first=0
var sec=1
console.log(`${first}`);
console.log(`${sec}`);

for(let i=0;i<num-2;++i){
    var fib=first+sec
    console.log(fib);
    first=sec
    sec=fib
}