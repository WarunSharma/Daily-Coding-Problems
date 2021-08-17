
/*
https://www.geeksforgeeks.org/count-ways-reach-nth-stair-using-step-1-2-3/
*/

function reachNthStair(N,memo={}){
    if(N in memo){
        return memo[N];
    }

    if(N==0)
        return 1;
    
    if(N<0){
        return 0;
    }   

    memo[N]=reachNthStair(N-1)+reachNthStair(N-2)+reachNthStair(N-3);  

    return memo[N];  
}

console.log(reachNthStair(4));