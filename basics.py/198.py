// Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'.
Input Size : A,B,C <= 100000
Sample Testcase :
INPUT
3 4 5
OUTPUT
yes //

int_num=map(int,input().split())
A,B,C=sorted(int_num)
if(A**2 + B**2 == C**2):
 print("yes")
else:
 print("no")
