
/*
https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
*/

function knapsack(W,w,v,n){

    if(n==0 || W==0){
        return 0;
    }

    if(w[n-1]>W){
        return knapsack(W,w,v,n-1);
    }
    else{
        return Math.max(knapsack(W,w,v,n-1),v[n-1]+knapsack(W-w[n-1],w,v,n-1));
    }
}

console.log(knapsack(10,[5,4,6,3],[10,40,30,50],4));