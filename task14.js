const prompt=require('prompt-sync') ({sigint:true})
var str=prompt("Enter a string:")
sub=[]
for(var i=0;i<str.length;i++){
    for(j=0;j<str.length;j++){
        if(!sub.includes(str.substring(i,j+1)))
        sub.push(str.substring(i,j+1))
    }
}
for(substring in sub){
    console.log(`${substring} ${sub[substring]}`);
}
