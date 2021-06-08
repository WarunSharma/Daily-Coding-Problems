/*

https://leetcode.com/problems/min-cost-climbing-stairs/

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

*/

function minCost(nums){
    let first=nums[0];
    let second=nums[1];

    for(let i=2;i<nums.length;++i){
        let temp=second;
        second=Math.min(nums[i]+first,nums[i]+second);
        first=temp;
    }

    return Math.min(first,second);
}

console.log(minCost([1,100,1,1,1,100,1,1,100,1]));