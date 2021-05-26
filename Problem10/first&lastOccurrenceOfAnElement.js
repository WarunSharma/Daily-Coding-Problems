/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let range=[];
    
    function getFirstOccurrenceOfElement(arr,ele){
    let low=0,high=nums.length-1,mid;

    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(nums[mid]>=target){
            high=mid;
        }
        else{
            low=mid;
        }
    }

    if(nums[low]===target){
        range.push(low);
        return;
    }
    if(nums[high]===target){
        range.push(high);
        return;
    }

    range.push(-1);
}




function getLastOccurrenceOfElement(arr,ele){
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
        range.push(high);
        return;
    }
    if(nums[low]===target){
        range.push(low);
        return;
    }

    range.push(-1);
}
    
    getFirstOccurrenceOfElement(nums,target);
    getLastOccurrenceOfElement(nums,target);
    
    
    return range;
};