
/*

https://leetcode.com/problems/find-in-mountain-array/
(This problem is an interactive problem.)

You may recall that an array A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]
Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target.  If such an index doesn't exist, return -1.

You can't access the mountain array directly.  You may only access the array using a MountainArray interface:

MountainArray.get(k) returns the element of the array at index k (0-indexed).
MountainArray.length() returns the length of the array.
Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

 

Example 1:

Input: array = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
Example 2:

Input: array = [0,1,2,4,2,1], target = 3
Output: -1
Explanation: 3 does not exist in the array, so we return -1.
 

Constraints:

3 <= mountain_arr.length() <= 10000
0 <= target <= 10^9
0 <= mountain_arr.get(index) <= 10^9

*/

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

 
 let cache=new Map();

 var getValueAtIndex=(mountainArr,idx)=>{
     // if(cache.get(idx)){
     //     return cache.get(idx);
     // }
     // cache.set(idx,mountainArr.get(idx));
     // return cache.get(idx);
     return mountainArr.get(idx)
 }
 
 var getIndex=(low,high,nums,target,inc)=>{
     let mid;
     while(high-low>1){
         mid=Math.floor((low+high)/2);
         if(inc){
             if(getValueAtIndex(nums,mid)>target){
                 high=mid;
             }
             else{
                 low=mid;
             }
         }
         else{
             if(getValueAtIndex(nums,mid)<target){
                 high=mid;
             }
             else{
                 low=mid;
             }
         }
         
     }
     if(getValueAtIndex(nums,low)==target){
         return low;
     }
     else if(getValueAtIndex(nums,high)==target){
         return high;
     }
     else{
         return -1;
     }
 }
 
 var getPeakElement=function(mountainArr){
     let low=0,high=mountainArr.length()-1,mid;
     while(high-low>1){
         mid=Math.floor((low+high)/2);
         if(getValueAtIndex(mountainArr,mid)>getValueAtIndex(mountainArr,mid+1)){
             high=mid;
         }
         else{
             low=mid;
         }
     }
     if(getValueAtIndex(mountainArr,low)>getValueAtIndex(mountainArr,high)){
         return low;
     }
     else{
         return high;
     }
 }
 
 
 var findInMountainArray = function(target, mountainArr) {
     let peak=getPeakElement(mountainArr);
     let idx=getIndex(0,peak-1,mountainArr,target,true);
     if(idx!=-1){
         return idx;
     }
     idx=getIndex(peak,mountainArr.length()-1,mountainArr,target,false);
     for (const [key, value] of cache.entries()) {
     console.log(key, value);
   }
     //cache.clear();
     return idx;
 };