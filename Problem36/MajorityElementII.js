

function getMajorityElementII(nums){
    let length=nums.length;
    let set = new Set();
    if(length<=2){
        if(length==0 || length==1)
            return nums;
        else
            {
                if(nums[0]==nums[1]){
                    return [nums[0]];
                }
                else{
                    return nums;
                }
            }    
    }
    nums.sort((a,b)=>a-b);
    let element=nums[0];
    let occurence=1;
    for(let i=1;i<length;++i){
        console.log(element,':',occurence);
         
        if(element==nums[i]){
            ++occurence;
        }
        else{
            element=nums[i];
            occurence=1;
        }
        if(occurence>Math.floor(length/3)){
            set.add(element);
        }

    }
    let res=[];
    for(let i of set){
        res.push(i);
    }

    return res;
}

console.log(getMajorityElementII([1,2,2,2,3,3,3]));
console.log('******************************');
console.log(getMajorityElementII([1,2]));