/*

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

*/

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