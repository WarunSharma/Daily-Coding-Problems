
function getStoredRainWater(arr){
    let collectedWater=0;
    for(let i=1;i<arr.length-1;++i){
        let leftMax=arr[0],rightMax=arr[arr.length-1];
        
        for(let j=i-1;j>=0;--j){
            leftMax=Math.max(arr[j],leftMax);
        }

        for(let k=i+1;k<arr.length-1;++k){
            rightMax=Math.max(arr[k],rightMax);
        }

        //console.log(`leftMax:${leftMax},rightMax:${rightMax}`)
        if(Math.min(leftMax,rightMax)-arr[i]>0)
            collectedWater+=(Math.min(leftMax,rightMax)-arr[i]);

    }

    return collectedWater;
}

console.log(getStoredRainWater([0,1,2,0,0,3,1,0,3]));
console.log(getStoredRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));