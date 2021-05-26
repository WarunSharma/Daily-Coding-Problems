/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.
*/


function getMinElement(nums){
    let low=0,high=nums.length-1,mid;
    while(high-low>1){
        mid=Math.floor((low+high)/2);
        //console.log(low,high);
        // if(nums[mid]>=nums[high]){
        //     low=mid;
        // }
        // else{
        //     high=mid;
        // }

        if(nums[mid]>nums[high]){
            low=mid;
        }
        else if(nums[mid]<nums[high]){
            high=mid;
        }
        else{
            high--;
        }
    }
    //console.log(low,high);
    if(nums[low]>nums[high]){
        return nums[high];
    }
    else{
        return nums[low];
    }
}


console.log(getMinElement([3,3,3,1,3,3]));