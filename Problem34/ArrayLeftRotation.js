
function leftRotation(arr,places){
    if(places==0 && places==arr.length){
        return arr;
    }

    while(places--){
        let temp=arr[0];
        for(let i=1;i<arr.length;++i){
            arr[i-1]=arr[i];
        }
        arr[arr.length-1]=temp;
    }

    return arr;
}

console.log(leftRotation([1,2,3,4,5],2));
console.log(leftRotation([1,2,3,4,5],0));
console.log(leftRotation([1,2,3,4,5],5));
console.log(leftRotation([1,2,3,4,5],4));