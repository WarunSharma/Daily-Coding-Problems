
/*
https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
*/

function knapsack(W,w,v,n){

    let memo=new Array(n+1);

    for(let i=0;i<=n;++i){
        memo[i]=new Array(W+1).fill(0);
    }

    for(let i=1;i<n+1;++i){
        for(let j=1;j<W+1;++j){
            if(j>=w[i-1]){
                let rCap=j-w[i-1];
                if(v[i-1]+memo[i-1][rCap]>memo[i-1][j]){
                    memo[i][j]=v[i-1]+memo[i-1][rCap];
                }
                else{
                    memo[i][j]=memo[i-1][j];
                }
            }
            else{
                memo[i][j]=memo[i-1][j];
            }
        }
    }

    return memo[n][W];
}

console.log(knapsack(10,[5,4,6,3],[10,40,30,50],4));