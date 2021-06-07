#include <bits/stdc++.h>

using namespace std;

int main(){
	long long n,k;
	vector<int> speed;
	vector<int> efficiency;
	vector<pair<int,int>> map;
	long long t;
	for(int i=0;i<n;++i){
		cin>>t;
		speed.push_back(t);
	}
	for(int i=0;i<n;++i){
		cin>>t;
		efficiency.push_back(t);
	}
	for(int i=0;i<n;++i){
		map.push_back({speed[i],efficiency[i]});
	}

	sort(map.begin(),map.end(),[](const pair<int,int> &p1,const pair<int,int> &p2){
		return p1.first>p2.first;
	});
	int ts=0,res=0;
	priority_queue<int,vector<int>,greater<int>> heap;
	for(auto i:map){
		ts+=i.second;
		if(heap.size()>=k){
			ts-=heap.top();
			heap.pop();
			heap.push(i.second);
		}
		else{
			heap.push(i.second);
		}
		res=max(res,(i.first)*ts);
	}

	cout<<res%1e9+7;
	return 0;
}