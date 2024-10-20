const prompt = require('prompt-sync')({ sigint: true });
var input = prompt("Enter the year: ")
const year=Number(input)

if(year%100==0){
    if (year%400==0) {
        console.log(`${year} is a century year and a leap year.`);
    } else {
        console.log(`${year} is a century year but not a leap year.`);
    }
}
else{
       console.log(`${year} is not a century year`);
    }