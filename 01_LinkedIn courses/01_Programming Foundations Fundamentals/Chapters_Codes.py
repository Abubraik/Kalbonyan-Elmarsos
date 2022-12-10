################################ CH 2 ################################
#print("Hello world!")

# print("Goodbye world!")

# PEMDAS

#print(Hello world)
# 10 * 2/0
# name = "abdullah"
# print("hello name")

#3 + 5 * 2

################################ CH 3 ################################

# age = 3 # int
# print(age)
# print(type(age))
# email = "Abdullah.abubraik@gmail.com" # string
# print(email)
# print(type(email))

# import keyword
# print(keyword.kwlist)

# 2 + 3
# 2*3
# 2 ** 3
# 2 / 3
# 2 // 3
# 2 % 3
# 45,000/5
# # 45000/5
# 0.2 + 0.3
# 0.2 / 0.3

# print("She is "eman" lost") #wrong
# print("She is 'eman' lost")

# print("Hi!")
# name = input("What's your name? ")

# print("It's nice to meet you,", name)
# answer = input("Are you enjoying the course? ")

# if answer == "Yes":
#     print("That's good to hear!")
# else:
#     print("Oh no! That makes me sad!")

# #Say hii to user
# print("Hi!")
# name = input("What's your name? ")

# #ask for name
# print("It's nice to meet you,", name)
# answer = input("Are you enjoying the course? ")

# if answer == "Yes":
#     print("That's good to hear!")
# else:
#     print("Oh no! That makes me sad!")

################################ CH 4 ################################

# age = 15
# age_to_drive = 15
# age == age_to_drive


# print("hi!")

# name = input("What's your name? ")
# print("It's nice to meet you,", name)

# answer = input("Are you enjoying the course? ")

# if answer == "yes":
#     print("That's good to hear!!")
# print("final")


# plant = "Tomato"

# if plant == "Tomato":
#     print(plant,",is red!!")
# else:
#     print(plant,"is not red!!")

# print("Thanks")

################################ CH 5 ################################

# print("~~~ The Shimmy ~~~")
# def shimmy():
#     print("Take one step to the right and stomp.")
#     print("Take one step to the left and stomp.")
#     print("Shake those hips!") 
# shimmy()
# shimmy()


# def hello():
#     print("Hello, friend!")
# hello()
# hello()


# def wash_car(amount_paid):
#     if (amount_paid == 12):
#         print("Wash with tri-color foam")
#         print("Rinse twice")
#         print("Dry with large blow dryer")
#     if(amount_paid == 6):
#         print("Wash with white foam")
#         print("Rinse once")
#         print("Air dry") 
# wash_car(12)


def withdraw_money(current_balance, amount):
    if (current_balance >= amount):
        current_balance = current_balance - amount
        return current_balance
balance = withdraw_money(150, 80)
if balance <=50:
    print("We need to deposit")
else:
    print("You're good")