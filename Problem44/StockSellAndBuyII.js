
/*

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

function stockSellAndBuy(nums){
    let res=0;
    let max=nums[1]-nums[0];
    for(let i=0;i<nums.length-1;++i){
        for(let j=i+1;j<nums.length;++j){
            if(nums[j]-nums[i]>max){
                max=nums[j]-nums[i];
            }
        }
    }
    if(max>0){
        return max;
    }
    else{
        return 0;
    }
}

console.log(stockSellAndBuy([7,1,2,3,8,2,10]));
console.log(stockSellAndBuy([7,6,4,3,1]));
console.log(stockSellAndBuy([7,1,5,3,6,4]));