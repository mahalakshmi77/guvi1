// Write a program to print the sum of the first K natural numbers.
Input Size : n <= 100000
Sample Testcase :
INPUT
3
OUTPUT
6 // 

import math
K=int(input())
if(K==0):
  print("0")
else:  
  print(math.factorial(K))
