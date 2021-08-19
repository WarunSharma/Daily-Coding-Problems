
/*
https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/
*/

let str="forgeeksskeegfor";

let memo=new Array(str.length);
for(let i=0;i<str.length;++i){
    memo[i]=new Array(str.length).fill(0);
}

function lPS(str){

    let result=0;
    for(let gap=0;gap<str.length;++gap){
        for(let i=0,j=gap;j<str.length;++i,++j){
            if(gap==0){
                memo[i][j]=1;
            }
            else if(gap==1){
                if(str[i]==str[j]){
                    memo[i][j]=1;
                }
                else{
                    memo[i][j]=0;
                }
            }
            else{
                if(str[i]==str[j]){
                    memo[i][j]=memo[i+1][j-1];
                }
                else{
                    memo[i][j]=0;
                }
            }
            
            if(memo[i][j]){
                result=gap+1;
            }
        
        }
    }

    return result;
}

console.log(lPS(str));
//console.log(memo);
