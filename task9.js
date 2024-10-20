const prompt=require('prompt-sync') ({sigint:true})
var input=prompt("Enter a Number to check if its perfect : ")
var num=Number(input)

function perfect(array,num){
    var sum=0
    for(i of array){
        sum+=i
    }
    return sum==num
}

var proper=[]
for(var i=1;i<num;i++){
    if(num%i==0){
        proper.push(i)
    }
}
console.log(perfect(proper,num)?`${num} is perfect`:`${num} is not perfect`);