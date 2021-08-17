
/*
https://www.geeksforgeeks.org/count-ways-reach-nth-stair-using-step-1-2-3/
*/

function reachNthStair(N){
    if(N==0)
        return 1;
    
    if(N<0){
        return 0;
    }   

    return reachNthStair(N-1)+reachNthStair(N-2)+reachNthStair(N-3);    
}

console.log(reachNthStair(4));