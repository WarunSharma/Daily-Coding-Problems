
let max=Number.MIN_SAFE_INTEGER;
function rodCutting(arr,size,sum){
    if(size==0){
        max=Math.max(sum,max);
        console.log(max);
    }

    for(let i=0;i<size;++i){
        rodCutting(arr,size-i-1,sum+arr[i]);
    }
}

rodCutting([1, 5, 8, 9, 10, 17, 17, 20],8,0);
console.log('Max',max);