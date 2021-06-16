function leadersInAnArray(nums){
    let res=[];
    res.push(nums[nums.length-1]);
    let leader=nums[nums.length-1];
    for(let i=nums.length-2;i>=0;--i){
        if(nums[i]>leader){
            res.push(nums[i]);
            leader=nums[i];
        }
    }
    res.reverse();
    console.log(res);
}

leadersInAnArray([7,10,4,3,6,5,2]);