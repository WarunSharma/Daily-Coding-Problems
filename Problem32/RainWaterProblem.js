
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
    let collectedWater=0;
    for(let i=1;i<arr.length-1;++i){
        let leftMax=arr[0],rightMax=arr[arr.length-1];
        
        for(let j=i-1;j>=0;--j){
            leftMax=Math.max(arr[j],leftMax);
        }

        for(let k=i+1;k<arr.length-1;++k){
            rightMax=Math.max(arr[k],rightMax);
        }

        //console.log(`leftMax:${leftMax},rightMax:${rightMax}`)
        if(Math.min(leftMax,rightMax)-arr[i]>0)
            collectedWater+=(Math.min(leftMax,rightMax)-arr[i]);

    }

    return collectedWater;
}

console.log(getStoredRainWater([0,1,2,0,0,3,1,0,3]));
console.log(getStoredRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));