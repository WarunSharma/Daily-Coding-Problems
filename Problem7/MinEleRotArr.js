/*

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

*/

function getMinElement(arr){
    let low=0,high=arr.length-1,mid;

    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(arr[mid]<arr[high]){
            high=mid;
        }
        else{
            low=mid;
        }
    }

    if(arr[low]>arr[high]){
        console.log(arr[high]);
    }
    else{
        console.log(arr[low]);
    }
}


getMinElement([3,4,5,1,2]);