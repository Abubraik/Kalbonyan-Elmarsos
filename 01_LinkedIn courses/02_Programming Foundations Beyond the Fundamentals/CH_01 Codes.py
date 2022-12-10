########################### CH 1 ###########################

#Collection
#Grouping multiple items together and storing them with a single name,called a variable.

#List
#It's a simple collection that groups pieces of data together in a certain order and assign it with a name.

#Example

#If I have these variables
# city1 = 'Riyadh'
# city2 = 'Mekka'
# city3 = 'Madina'
# city4 = 'Taif'

cities = [
    'Riyadh',
    'Mekka',
    'Madina',
    'Taif',
]


#Dictionary lets you store related info labeled for each item.

#Example
#If I have these variables
# state_bird = 'California quail'
# state_animal = 'Grizzly bear'
# state_flower = 'California poppy'
# state_fruit = 'Avocado'

symbols = {
    'bird':'California quail',
    'animal':'Grizzly bear',
    'flower':'California poppy',
    'fruit': 'Avocado',
}

#In lists you access data with their index

#Example
cities = [
    'Riyadh',# 0
    'Mekka',# 1
    'Madina',# 2
    'Taif',# 3
]
#To access Mekka
print(cities[1])

#In Dictionary we use the label

#Example
symbols = {
    'bird':'California quail',
    'animal':'Grizzly bear',
    'flower':'California poppy',
    'fruit': 'Avocado',
}
#To access Avocado
print(symbols['fruit'])

#In Python elements of collections can be of diffiernt types
