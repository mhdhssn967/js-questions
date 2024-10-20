var arr=[1,-1,1,2]
var smallest=1
for(i=0;i<arr.length;i++){
    if(arr.includes(smallest)){
        smallest+=1
    }
    else{
        console.log(smallest);
        break;
    }
}

