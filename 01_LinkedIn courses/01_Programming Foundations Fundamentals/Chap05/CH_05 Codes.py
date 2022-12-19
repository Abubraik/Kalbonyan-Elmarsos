
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