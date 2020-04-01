// Given a string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0).
Input Size : |s| <= 10000000(complexity O(n))
Sample Testcase :
INPUT
codekata
OUTPUT
ocedakat  //

str =input()
output = ''
i = 0
while i < len(str):
        if i + 1 < len(str):
                output = output + str[i + 1]
                output = output + str[i]
        i = i + 2
print(output)
