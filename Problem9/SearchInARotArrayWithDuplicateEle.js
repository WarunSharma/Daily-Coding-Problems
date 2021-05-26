/*

https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.

*/

function searchInARotatedArrayWithDuplicateEle(arr,target){
    let low=0,high=arr.length-1,mid;
    while(high-low>1){
        mid=Math.floor((low+high)/2);

        if(arr[low]===arr[mid] && arr[high]===arr[mid]){
            low++;
            high--;
            continue;
        }
        if(arr[low]<=arr[mid]){
            if(target>=arr[low] && target<=arr[mid]){
                high=mid;
            }
            else{
                low=mid;
            }
        }
        else{
            if(target>=arr[mid] && target<=arr[high]){
                low=mid;
            }
            else{
                high=mid;
            }
        }
    }

    console.log(`${low},${high}`);
    if(arr[low]===target){
        return true;
    }
    if(arr[high]===target){
        return true
    }
    return false
}

console.log(searchInARotatedArrayWithDuplicateEle([1,1,1,1,1,1,2,1,1,1,1],2));
console.log(searchInARotatedArrayWithDuplicateEle([0,0,1,1,2,0],2));
