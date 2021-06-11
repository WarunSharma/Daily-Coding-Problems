function rightRotation(arr,places){
    if(places==0 && places==arr.length){
        return arr;
    }

    while(places--){
        let temp=arr[arr.length-1];
        for(let i=arr.length-2;i>=0;--i){
            arr[i+1]=arr[i];
        }
        arr[0]=temp;
    }

    return arr;
}

console.log(rightRotation([1,2,3,4,5],2));
console.log(rightRotation([1,2,3,4,5],0));
console.log(rightRotation([1,2,3,4,5],5));
console.log(rightRotation([1,2,3,4,5],4));