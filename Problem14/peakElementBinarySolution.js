
function getPeakElement(arr){
    let low=0,high=arr.length-1,mid;
    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(arr[mid]<arr[mid+1]){
            low=mid;
        }
        else{
            high=mid;
        }
    }
    console.log(mid,low,high);
    if(arr[low]>arr[high]){
        return low;
    }
    else{
        return high;
    }
}


// console.log(getPeakElement([1,2,3,5,1]));
// console.log(getPeakElement([1,2,3,5,6]));
// console.log(getPeakElement([6,1,2,3,5,1]));
console.log(getPeakElement([2,1]));