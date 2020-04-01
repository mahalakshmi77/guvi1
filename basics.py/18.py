// Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1
Sample Testcase :
INPUT
10 5
OUTPUT
5 //

a,b=map(int,input().split())
i = 1
while(i <= a and i <= b):
    if(a % i == 0 and b % i == 0):
        GCD = i
        i = i+1
    print(GCD)
else:
    print('-1')
