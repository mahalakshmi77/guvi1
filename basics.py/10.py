// Given a number N, print 'yes' if it is composite else print 'no'.
Sample Testcase :
INPUT
123
OUTPUT
yes //

n=int(input())
factor=0
for i in range(1,n):
  if n%i==0:
    factor=i
if factor>1:
  print("yes")
else:
  print("no")
