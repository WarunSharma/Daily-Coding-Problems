function getMajorityElement(arr){
    let majorityElement,occurrence=0;
    for(let i=0;i<arr.length-1;++i){
        let currOccurrence=1;
        for(let j=i+1;j<arr.length;++j){
            if(arr[i]==arr[j]){
                ++currOccurrence;
            }
        }
        if(currOccurrence>occurrence){
            majorityElement=arr[i];
            occurrence=currOccurrence;
        }
    }

    if(occurrence>arr.length/2){
        return {majorityElement,
            occurrence};
    }        
}

console.log(getMajorityElement([1,2,2,2,3,3,3]));