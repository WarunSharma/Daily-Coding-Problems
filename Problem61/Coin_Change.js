
/*
https://www.geeksforgeeks.org/coin-change-dp-7/
*/

let min=Number.MAX_SAFE_INTEGER;
function coinChange(N,coins,coinSum,coinStore=[],coinCount=0){

    //Return if coin sum is greater than N
    if(coinSum>N){
        return;
    }

    //Coin Sum is equal to N
    if(coinSum==N){
        console.log(coinStore);
        //Calculate minimum coin count
        min=Math.min(min,coinCount);
        return;
    }

    //Loop through the coins
    for(let coin of coins){
        coinStore.push(coin);
        coinChange(N,coins,coinSum+coin,coinStore,coinCount+1);
        coinStore.pop();
    }
}

coinChange(4,[2,1,3,4],0);
console.log('Minimum Count',min);