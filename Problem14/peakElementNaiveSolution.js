


function getPeakElement(arr){
    let peak=0;
    for(let i=1;i<arr.length-1;++i){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1] && arr[i]>arr[peak]){
            peak=i;
        }
    }

    if(arr[peak]<arr[arr.length-1]){
        peak=arr.length-1;
    }

    return peak;
}

console.log(getPeakElement([1,2,3,5,1]));
console.log(getPeakElement([1,2,3,5,6]));
console.log(getPeakElement([6,1,2,3,5,1]));