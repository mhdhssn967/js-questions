const prompt=require('prompt-sync') ({sigint:true})
var input=prompt("Enter the no of rows : ")
var row=""
var start=1
var end=0

for(var i=1;i<input;i++){
    for(var j=1;j<=i;j++){
        row+=start+end
        console.log(row);
        start=start+end
    }
}

