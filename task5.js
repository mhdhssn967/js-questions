const prompt=require('prompt-sync') ({sigint:true})
var input1=prompt("Enter first Number : ")
var input2=prompt("Enter second Number : ")
var input3=prompt("Enter the operator ( +, -, *, / ) : ")

var num1=Number(input1)
var num2=Number(input2)

const add=(a,b)=>a+b
const sub=(a,b)=>a-b
const mul=(a,b)=>a*b
const div=(a,b)=>a/b


switch(input3){
    case '+':console.log(`${num1}+${num2}=${add(num1,num2)}`);
        break;
    case '-':console.log(`${num1}-${num2}=${sub(num1,num2)}`);
        break;
    case '*':console.log(`${num1}*${num2}=${mul(num1,num2)}`);
        break;
    case '/':console.log(`${num1}/${num2}=${div(num1,num2)}`);
        break;
    default:console.log("Invalid Input");
}

