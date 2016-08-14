
# In python, a string object can be considerd as a list of characters
# Please use selection sort or bubble sort to sort a string
# Helper functions:
#
#	     Get one character from string:
#		
#        a = "asdfghjkl" 
#        print(a[1]) -> this should print 's' in console
#       
#		 Compare character (You can google ASCII code if you are interesting how to compare character) :		
#
#        some_character1 = "a"
#        some_character1 = "b"
#        print(some_character1 > some_character2) -> this should print False in consode 
#

def your_sort_algorithm(string):
	# your code start here
	# you should return a sorted (ascending or descending) string 


unsorted_string = "asdfghjkl"

sorted_string = your_sort_algorithm(unsorted_string)

print(sorted_string) # It should be either adfghjkls or slkjhgfda