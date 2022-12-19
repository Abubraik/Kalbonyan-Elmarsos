###################################### CH 8 #######################################
#Object-oriented 

# Each object has attributes and behaviors
# Each attribute is data that the object has
# Each behavior is something that the object can do
# Attributes are referred to as properties
# Behaviors are called methods

#A class describes the types of attributes and behaviors that an object should have.

# Using built-in classes
# flips = [
#     'heads',
#     'tails',
#     'tails',
#     'heads',
#     'tails',
# ]
# print(flips.count('heads'))
# print(flips.pop())


class Attendee:
    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets
    def displayAttendee(self):
        print(f'Name : {self.name}, Tickets: {self.tickets}')
    def addTicket(self):
        self.tickets += 1
        print(f'{self.name} tickets increased to {self.tickets}')
attendee1 = Attendee('Bob',2)
attendee2 =Attendee('ali',1)

attendee1.displayAttendee()
attendee2.displayAttendee()
attendee2.addTicket()
attendee2.addTicket()
attendee1.displayAttendee()
attendee2.displayAttendee()