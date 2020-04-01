// Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
Sample Testcase :
INPUT
5 5
OUTPUT
yes //

import math
N,M=map(int,input().split())
if(N*M==math.sqrt(N | M)):
   print("yes")
else:
   print("no")
