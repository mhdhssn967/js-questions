const prompt=require('prompt-sync') ({sigint:true})
var input1=prompt("Enter the first string: ")
var input2=prompt("Enter the seconfd string: ")
var anagram=true
if(input1.length==input2.length){
        var string1=input1.split('').sort()       
        console.log(string1);         
        var string2=input2.split('').sort()
        console.log(string2);
        for(char in string1){
            if(string1[char]!=string2[char]){
            anagram=false
            }
        } 
        if(anagram){
            console.log(`${input1} & ${input2} are anagrams`);
        }
        else{
            console.log(`${input1} & ${input2} are not anagrams`);
        }
}
else{
    console.log(`${input1} & ${input2} are not anagrams`);
}
