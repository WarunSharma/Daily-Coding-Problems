#include<bits/stdc++.h>

using namespace std;

void callByValue(int *x,int *y){
    int temp;
    temp=*x;
    *x=*y;
    *y=temp;
    cout<<"X:"<<x<<","<<"Y:"<<y<<"\n";
}

int main(){
    int x,y;
    cin>>x>>y;
    callByValue(&x,&y);
    cout<<"X:"<<x<<","<<"Y:"<<y;
    return 0;
}