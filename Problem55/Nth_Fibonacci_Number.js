
/*
https://www.techiedelight.com/program-to-find-nth-fibonacci-number/
*/

function NthFibonacciNumber(n){
    if(n<=2) return 1;
    return NthFibonacciNumber(n-1)+NthFibonacciNumber(n-2);
}

console.log(NthFibonacciNumber(10));
console.log(NthFibonacciNumber(11));
console.log(NthFibonacciNumber(12));
console.log(NthFibonacciNumber(50));