const counter=(num)=>{
    return num+=1
}
var n=10
setTimeout(console.log(n=counter(n)));
console.log(n=counter(n));
console.log(n=counter(n));
