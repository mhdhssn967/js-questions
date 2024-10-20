arr1=[1,5,3,4,19]
arr2=[12,14,21,26]
arr3=arr1.concat(arr2).sort((a,b)=>a-b)
console.log(arr3);
if(arr3.length%2==0){
    median=(arr3[arr3.length/2]+arr3[arr3.length/2-1])/2
    console.log(median);
}
else{
    median=arr3[Math.floor(arr3.length/2)]   
    console.log(median);
}

