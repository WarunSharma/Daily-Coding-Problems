
/*
https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/
*/

function gridTraveller(m,n,memo={}){
    if(m==0 || n==0){
        return 0;
    }
    if(m==1 || n==1){
        return 1;
    }

    // key=m<=n?`${m},${n}`:`${n},${m}`;
    // if(key in memo){
    //     return memo[key];
    // }

    // console.log(key);
    // memo[key]=gridTraveller(m-1,n,memo)+gridTraveller(m,n-1,memo);
    // console.log(JSON.stringify(memo))
    // console.log(key);
    // return memo[key];
    return gridTraveller(m-1,n)+gridTraveller(m,n-1);
}

console.log(gridTraveller(1,1));
console.log(gridTraveller(2,2));
console.log(gridTraveller(3,3));
//console.log(gridTraveller(18,18));