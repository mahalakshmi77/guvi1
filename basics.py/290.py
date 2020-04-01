// Given a number N followed by N numbers.Find the smallest number and largest number and print both the indices(1 based indexing).
Input Size : N <= 100000
Sample Testcase :
INPUT
5
1 2 3 4 5
OUTPUT
1 5 //

N=int(input())
arr=list(map(int,input().split()))
sol1 = min(arr)
sol2 = max(arr)
print(sol1,sol2)

