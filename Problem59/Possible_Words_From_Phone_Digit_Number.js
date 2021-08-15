
/*
https://www.geeksforgeeks.org/find-possible-words-phone-digits/
*/

let temp=0;
function possibleWords(nums,keypad,index,output=""){
    if(output.length==nums.length){
        console.log(output);
        temp++;
        return;
    }

    // for(let idx=index;idx<nums.length;++idx){
    //     for(let char of keypad[nums[idx]]){
    //         //console.log(char);
    //         possibleWords(nums,keypad,idx+1,output+char);
    //     }
    // }

    for(let char of keypad[nums[index]]){
        //console.log(char);
        possibleWords(nums,keypad,index+1,output+char);
    }
}

let keypad={
    0:[],
    1:[],
    2:['a', 'b', 'c'],
    3:['d', 'e', 'f'],
    4:['g', 'h', 'i'],
    5:['j', 'k', 'l'],
    6:['m', 'n', 'o'],
    7:['p', 'q', 'r', 's'],
    8:['t', 'u', 'v'],
    9:['w', 'x', 'y', 'z']
}

possibleWords([2,3,9],keypad,0,'');
console.log(temp);