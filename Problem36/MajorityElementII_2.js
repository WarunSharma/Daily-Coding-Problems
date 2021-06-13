

function getMajorityElementII(nums){
    if(nums<=1){
        return nums;
    }
    
    let map=new Map();
    let length=nums.length;
    let temp;
    for(let i=0;i<length;++i){
        if(map.has(nums[i])){
            temp=map.get(nums[i]);
            map.set(nums[i],temp+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    
    let res=[];
    for(let i of map){
        console.log(i[0],i[1]);
        if(i[1]>Math.floor(length/3)){
            res.push(i[0]); 
        }
    }
    
    return res;
}

console.log(getMajorityElementII([1,2,2,2,3,3,3]));
console.log('******************************');
console.log(getMajorityElementII([1,2]));