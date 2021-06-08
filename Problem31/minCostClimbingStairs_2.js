/*

https://leetcode.com/problems/min-cost-climbing-stairs/

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

*/

function minCost(nums){
    let dp=[]

    dp[0]=nums[0];
    dp[1]=nums[1];

    for(let i=2;i<nums.length;++i){
        dp[i]=Math.min(nums[i]+dp[i-1],nums[i]+dp[i-2]);
    }

    return Math.min(dp[nums.length-1],dp[nums.length-2]);
}

console.log(minCost([1,100,1,1,1,100,1,1,100,1]));