###################################### CH 7 #######################################
#Debugging
#The process of identifying and fixing bugs.

#There are three main types of bugs in computer programs. 

#Syntax error
#Code that doesn't match the rules of the language.

#Run-Time error

#Logic error

# for value in range(10):
#     print(value)

# temp = 50
# if temp < 60:
#     print('Bring a jacket')

# i = 10
# while i > 0:
#     i -= 1
#     print(i) 

#Test cases
#Commands or scripts that use the program in a way designed
# to test a specific scenario.
def check_temp(temp):
    if  temp < 15:
        print('Bring a jacket')
    elif temp > 25 and temp <= 35:
        print('Pack a jacket')
    elif temp > 35:
        print('Leave the jacket at home')

check_temp(10)
check_temp(30)
check_temp(37)