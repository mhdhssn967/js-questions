var arr=[10, 20, 15, 2, 23, 90, 80]
for(var i=1;i<arr.length-1;i++){
    if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
        console.log(`Peak element is ${arr[i]}`);
    }
}
