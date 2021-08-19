
/*
https://www.geeksforgeeks.org/coin-change-dp-7/
*/

let min=Number.MAX_SAFE_INTEGER;
function coinChange(N,coins,coinSum,coinStore=[],coinCount=0){

    if(coinSum>N){
        return;
    }

    if(coinSum==N){
        console.log(coinStore);
        min=Math.min(min,coinCount);
        return;
    }

    for(let coin of coins){
        coinStore.push(coin);
        coinChange(N,coins,coinSum+coin,coinStore,coinCount+1);
        coinStore.pop();
    }
}

coinChange(4,[2,1,3,4],0);
console.log('Minimum Count',min);