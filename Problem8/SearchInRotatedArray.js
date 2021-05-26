/*

https://leetcode.com/problems/search-in-rotated-sorted-array
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

*/
function searchInARotatedArray(arr,target){
    let low=0,high=arr.length-1,mid;

    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(arr[low]<arr[mid]){
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

    if(arr[low]==target)
        return low;
    if(arr[high]==target)
        return high;
            
    return -1;    
}



console.log(searchInARotatedArray([4,5,6,7,0,1,2,3],3));