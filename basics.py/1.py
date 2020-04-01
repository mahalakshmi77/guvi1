// Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.
Sample Testcase :
INPUT
9 2
OUTPUT
odd //

A,B = map(int,input().split())
sum=A+B
if(sum%2==0):
 print("even")
else:
 print("odd")
