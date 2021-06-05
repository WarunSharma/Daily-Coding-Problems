/*

get second smallest number from an array

*/

function getSecondSmallestNumber(nums){
    let smallest,secondSmallest;
    if(nums.length>=2){
        if(nums[0]>nums[1]){
            secondSmallest=nums[0];
            smallest=nums[1];
        }
        else{
            secondSmallest=nums[1];
            smallest=nums[0];
        }

        for(let i=2;i<nums.length;++i){
            if(nums[i]<smallest){
                secondSmallest=smallest;
                smallest=nums[i];
            }
            else if(nums[i]>smallest && nums[i]<secondSmallest){
                secondSmallest=nums[i];
            }
            else{
                continue;
            }
        }

        return secondSmallest;
    }
    else{
        return nums[0];
    }
    
}


console.log(getSecondSmallestNumber([4,5,2,9,1]))
console.log(getSecondSmallestNumber([1,3,1,1,1]))
console.log(getSecondSmallestNumber([-2,5,6,9,-1]))