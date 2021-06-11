function leftRotation(arr,places){
    places%=arr.length;
    if(places==0){
        return arr;
    }
    for(let i=0,j=places-1;i<j;++i,--j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    for(let i=places,j=arr.length-1;i<j;++i,--j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    for(let i=0,j=arr.length-1;i<j;++i,--j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

console.log(leftRotation([1,2,3,4,5],2));
console.log(leftRotation([1,2,3,4,5],0));
console.log(leftRotation([1,2,3,4,5],5));
console.log(leftRotation([1,2,3,4,5],8));