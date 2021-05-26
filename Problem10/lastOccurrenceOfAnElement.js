function lastOccurrence(nums,target){
    let low=0,high=nums.length-1,mid;

    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(nums[mid]>target){
            high=mid;
        }
        else{
            low=mid;
        }
    }

    if(nums[high]===target){
        return high;
    }

    if(nums[low]===target){
        return low;
    }
    

    return -1;
}



console.log(lastOccurrence([1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4],4));

console.log(lastOccurrence([2],2));