// Write a program to find all of the roots of the quadratic.

Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.

Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

Input Description:
Three numbers corresponding to the coefficients of x(squared), x and constant are given as an input in that particular order

Output Description:
Print the two values of X after rounding off to 2 decimal places if required.

Sample Input :
1 5 6
Sample Output :
-2.00
-3. //

import math
a,b,c=map(int,input().split())
d = (b**2) - (4*a*c)
sol1 = (-b+math.sqrt(d))/(2*a)
sol2 = (-b-math.sqrt(d))/(2*a)
print('%.2f'%sol1)
print('%.2f'%sol2)

