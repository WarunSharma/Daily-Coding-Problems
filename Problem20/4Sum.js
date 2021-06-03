var fourSum = function(nums, target) {
    let res=[];
    let sortedNums=nums.sort((a,b)=>a-b);
    for(let i=0;i<sortedNums.length-3;++i){
        if(i>0 && sortedNums[i]==sortedNums[i-1]){
            continue;
        }
        for(let j=i+1;j<sortedNums.length-2;++j){
            if(j>i+1 && sortedNums[j]==sortedNums[j-1]){
                continue;
            }  
            let left=j+1,right=sortedNums.length-1;
            while(left<right){
                //console.log(sortedNums[i],sortedNums[j],sortedNums[left],sortedNums[right]);
                //console.log(i,j,left,right);
                let sum=sortedNums[i]+sortedNums[j]+sortedNums[left]+sortedNums[right];
                if(sum==target){
                    res.push([sortedNums[i],sortedNums[j],sortedNums[left],sortedNums[right]]);
                    while(left<right && sortedNums[left]==sortedNums[left+1]){
                        ++left;
                    }
                    while(left<right && sortedNums[right]==sortedNums[right-1]){
                        --right;
                    }
                    --right;
                    ++left;
                }
                else if(sum>target){
                    --right;
                }
                else{
                    ++left;
                }
            }
        }
    }
    return res;
};

console.log(fourSum([1,0,-1,0,-2,2],0));