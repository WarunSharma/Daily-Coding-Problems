/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int segregate(int A[],int size)
{
    int j=0;
    for(int i=0;i<size;++i)
    {
        if(A[i]<0)
        {
            swap(A[i],A[j]);
            ++j;
        }
    }
    return j;
}

int findMissingNumber(int A[],int size)
{
    for(int i=0;i<size;++i)
    {
        if(A[i]-1<size && A[abs(A[i])-1]>0)
        {
            A[abs(A[i])-1]=-A[abs(A[i])-1];
        }
    }
    for(int i=0;i<size;++i)
    {
        if(A[i]>0)
        return i+1;
    }
    return size+1;
}
int findMissing(int A[],int size)
{
    int shift=segregate(A,size);
    
    return findMissingNumber(A+shift,size-shift);
    
}
int main()
{
    int A[]={2, 3, 4, 6, 8, 1, -10, 15};
    int missingNum=findMissing(A,sizeof(A)/sizeof(A[0]));
    cout<<missingNum;
    return 0;
}
