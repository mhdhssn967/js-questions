const prompt=require('prompt-sync') ({sigint:true})
var numArray=[]
var largest=0
var input=prompt("Enter the no of elements in the array: ")
for(var i=0;i<input;i++){
    var item=prompt(`Element at ${i} : `)
    numArray.push(Number(item))
}
for(var i=0;i<input;i++){
    for(var j=i+1;j<input;j++){
        for(var k=j+1;k<input;k++){
            if(numArray[i]*numArray[j]*numArray[k]>largest){
                largest=numArray[i]*numArray[j]*numArray[k]
                var a=numArray[i]
                var b=numArray[j]
                var c=numArray[k]
            }
        }

    }
}
console.log(`Largest number ${a}*${b}*${c}=${largest}`);

