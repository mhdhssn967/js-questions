const prompt=require('prompt-sync') ({sigint:true})
var input1=prompt("Enter the first side of the triangle : ")
var input2=prompt("Enter the second side of the triangle : ")
var input3=prompt("Enter the third side of the triangle : ")

var side1=Number(input1)
var side2=Number(input2)
var side3=Number(input3)
if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1){
    if(side1==side2 && side2==side3){
        console.log("Triangle is Equillateral");
    }
    else if(side1==side2 || side2==side3 || side1==side3){
        console.log("triangle is isosceles");   
    }
    else{
        console.log("Triangle is scalene");
    }
}
else{
    console.log("Not a triangle");
}
