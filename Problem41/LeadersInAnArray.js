function leadersInAnArray(nums){
    for(let i=0;i<nums.length;++i){
        let leader=true;
        for(let j=i+1;j<nums.length;++j){
            if(nums[i]<nums[j]){
                leader=false;
                break;
            }
        }
        if(leader){
            console.log(nums[i]);
        }
    }
}

leadersInAnArray([7,10,4,3,6,5,2]);