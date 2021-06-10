
/*

https://leetcode.com/problems/trapping-rain-water/
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105

*/

function getStoredRainWater(arr){
    let leftMax=[];
    let rightMax=[];
    let n=arr.length;
    leftMax[0]=arr[0];
    rightMax[n-1]=arr[n-1];
    let collectedWater=0;

    for(let i=1;i<n;++i){
        leftMax[i]=Math.max(arr[i-1],leftMax[i-1]);
    }

    for(let i=n-2;i>=0;--i){
        rightMax[i]=Math.max(arr[i+1],rightMax[i+1]);
    }

    for(let i=1;i<n-1;++i){
        if((Math.min(rightMax[i],leftMax[i])-arr[i])>0){
            collectedWater+=(Math.min(rightMax[i],leftMax[i])-arr[i]);
        }
    }
    return collectedWater;
}

console.log(getStoredRainWater([0,1,2,0,0,3,1,0,3]));
console.log(getStoredRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));