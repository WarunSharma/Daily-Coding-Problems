function chefSwap(a,b){
    let a1,a2,b1,b2;
    a1=Math.floor(a/10);
    a2=Math.floor(a%10);
    b1=Math.floor(b/10);
    b2=Math.floor(b%10);
    let max=a+b;
    if(a1!=0 && b1!=0){
        let x= ((a1*10)+b2)+((b1*10)+a2);
        let y= ((a1*10)+b1)+((a2*10)+b2);
        let z= ((b2*10)+a2)+((b1*10)+a1)
        if(x>max){
            max=x;
        }
        if(y>max){
            max=y;
        }
        if(z>max){
            max=z;
        }
    }
    else if(a1==0 && b1!=0){
        let x=b1+(a2*10+b2);
        let y=b2+(b1*10+a2);
        if(x>max){
            max=x;
        }
        if(y>max){
            max=y;
        }
    }
    else if(a1!=0 && b1==0){
        let x=(a1*10+b2)+a2;
        let y=(b2*10+a2)+a1;
        if(x>max){
            max=x;
        }
        if(y>max){
            max=y;
        }
    }
    

    return max;
}

console.log(chefSwap(13,82));
console.log(chefSwap(9,24));
console.log(chefSwap(20,30));