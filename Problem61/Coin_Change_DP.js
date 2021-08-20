
function coinSum(sum,coins){

    //Initialize memoization array
    let memo=new Array(sum+1).fill(0);

    //Always a way to make sum 0
    memo[0]=1;

    //Loop through the coins
    for(let coin of coins){

        //Loop through each coin<value<sum
        for(let idx=coin;idx<memo.length;++idx){

            //Store the ways
            memo[idx]+=memo[idx-coin];

        }
        
    }

    //console.log(memo);
    return memo[sum];
}

console.log(coinSum(7,[1,2,3,5]));