
function stockSellAndBuy(nums){
    let profit=0;
    for(let i=1;i<nums.length;++i){
        if(nums[i]>nums[i-1]){
            profit+=nums[i]-nums[i-1];
        }
    }
    return profit;
}

console.log(stockSellAndBuy([1,5,3,4,8,12]));
console.log(stockSellAndBuy([1,5,3,1,8,12]));