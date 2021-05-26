/*

https://leetcode.com/problems/powx-n/
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

*/

function getSolution(x,n){
    if(n<0){
        return 1/pow(x,Math.abs(n));
    }
    else{
        return pow(x,n);
    }
}

let dp = new Array(1000).fill(0);

function pow(x,n){
    if(n===0){
        return 1;
    }
    if(n===1){
        return x;
    }

    let temp;
    if(!dp[Math.floor(n)]){
        dp[Math.floor(n)]=pow(x,Math.floor(n/2));;
    }
    
    temp=dp[Math.floor(n)];
    

    if(n%2===0){
        return temp*temp;
    }
    else{
        return x*temp*temp;
    }
}

console.log(getSolution(2.3333,3));