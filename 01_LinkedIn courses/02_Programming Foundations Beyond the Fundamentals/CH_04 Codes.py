###################################### CH 4 #######################################
# #Concatenation
# #In which multiple strings are combined into a single string. 
# value = input('Enter a number: ')
# print(value)
# #The result is treated as a string.
# #This means that I can concatenate text to what a user enters, by using a plus sign.
# value = input('Enter a number: ')
# print(value + ' is my favorite number!')
# value_int = int(value)
# print(value_int * 10)
# #I need to convert the user's entry to a number data type,
# #and then I can do math with the converted number.

#String methods
first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'
#To capitalize
f_name = first_name.capitalize()
l_name = last_name.capitalize()
print(f_name,l_name)
#Get first occurance
award_location = note.find("award: ")
print(award_location)

#Sclicing
#Getting part of a string value
#string[start:end]
award_text = note[7:]
print(award_text)

#Regular expressions
#lets you create a description of a pattern that you want to match.
# /hello/ #indicate specific text you're looking for
#\d indicates a digit, \w indicates a word character.
# * indicates zero or more and ? indicates zero or one
import re
five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'

# write a regular expression that will identify whether a variable
# contains five digits in a row
five_digit_expression = r'\d{5}'

print(re.search(five_digit_expression,five_digit_zip))
print(re.search(five_digit_expression,nine_digit_zip))
print(re.search(five_digit_expression,phone_number))

