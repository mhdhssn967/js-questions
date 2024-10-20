const prompt=require('prompt-sync') ({sigint:true})
var input=prompt("Enter a Number : ")
var sum=0
var num=Number(input)
var first=0
var sec=1
console.log(`${first}`);
console.log(`${sec}`);

for(let i=0;i<num-2;++i){
    var fib=first+sec
    console.log(fib);
    if(fib%2==0){
        sum+=fib
    }
    first=sec
    sec=fib
}
console.log(`Sum of even numbers in the fibanocci series upto ${input}:${sum}`);
