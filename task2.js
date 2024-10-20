const prompt = require('prompt-sync')({ sigint: true });
var input = prompt("Enter the month: ").toLowerCase(); 

var spring = ["march", "april", "may"];
var summer = ["june", "july", "august"];
var autumn = ["september", "october", "november"];
var winter = ["december", "january", "february"];

if (spring.includes(input)) {
    console.log("Spring Season");
} else if (summer.includes(input)) {
    console.log("Summer Season");
} else if (autumn.includes(input)) {
    console.log("Autumn Season");
} else if (winter.includes(input)) {
    console.log("Winter Season");
} else {
    console.log("Invalid month entered");
}