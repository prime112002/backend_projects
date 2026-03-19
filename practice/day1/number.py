"""
1)
findout even or odd for given number
**********
def evenodd(n):
    if n%2==0:
        return "even"
    else:
        return "odd"

print(evenodd(123))
**************
"""

""" 
2)
for finding the sum of digit
num=12345

sum=0

while(num>0):
    last=num%10
    sum=sum+last
    #print(last)
    num=num//10
    
print(sum)
    
"""

"""
3)
reversing a number
num=12345

rev=0

while(num>0):
    last=num%10
    rev=rev*10+last
    num=num//10
    
print(rev)
"""
"""
4)
checkin number is primenumber or what
num=1221
n=num
rev=0

while(n>0):
    last=n%10
    rev=rev*10+last
    n=n//10
    
if num == rev:
    print("prime boss")
else:
    print("no boss")
    

"""
"""
5)
number of digit in number
num=1221567
n=num
rev=0

while(n>0):
    last=n%10
    rev=rev+1
    n=n//10
print(rev)
"""

"""
find out the second largest digit in number
num=1234
first=second=float('-inf')
while num > 0:
    last=num%10
    if last > first:
        second=first
        first=last
    elif last > second and last !=first:
        second=last
    num=num//10

print(second)
"""

"""
finding out armstrong
def armstrong(number):
    if number < 0:
        return false
        
    count=len(str(number))
    n=number
    res=0
    
    while n>0:
        last=n%10
        res=res+last**count
        n=n//10
    return res==number
    
    
print(armstrong(9474))

"""