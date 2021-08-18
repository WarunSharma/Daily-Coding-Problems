let m=2,n=3;
let dp=new Array(m+1);
for(let i=0;i<m+1;++i){
    dp[i]=new Array(n+1).fill(-1);
}

function longestCommonSubsequence(str1,str2,m,n){

    if(dp[m][n]!=-1){
        return dp[m][n];
    }
    if(m==0 || n==0){
        dp[m][n]=0;
    }
    else{
        if(str1[m-1]==str2[n-1]){
            dp[m][n]=1 + longestCommonSubsequence(str1,str2,m-1,n-1);
        }
        else{
            dp[m][n]=Math.max(longestCommonSubsequence(str1,str2,m-1,n),longestCommonSubsequence(str1,str2,m,n-1));
        }
    }

    return dp[m][n];
}

console.log(longestCommonSubsequence('AB','ACB',m,n));