
let max=Number.MIN_SAFE_INTEGER;
function calculate(arr,N,x,y,sum){
    if(x==N){
        console.log('SUM',sum);
        max=Math.max(max,sum);
        return;
    }

    calculate(arr,N,x+1,y,sum+arr[x+1][y]);
    calculate(arr,N,x+1,y+1,sum+arr[x+1][y+1]);

}

calculate([[3,2,4],[2,9,100],[1,1000,3]],2,0,0,0);
console.log('MAX',max);