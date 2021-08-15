/*
https://www.techiedelight.com/program-to-find-nth-fibonacci-number/
*/

//Memoization
function NthFibonacciNumber(n,memo={}){
    if(n in memo) return memo[n];
    if(n<=2) return 1
    memo[n]=NthFibonacciNumber(n-1,memo)+NthFibonacciNumber(n-2,memo);
    return memo[n];
}

console.log(NthFibonacciNumber(10));
console.log(NthFibonacciNumber(11));
console.log(NthFibonacciNumber(12));
console.log(NthFibonacciNumber(50));