/* 
Unit tests: 
1. A function called "multiplication" that returns the product
of the two input numbers: 

Expect multiplication(2, 3) to be 6
Expect multiplication(0, 100) to be 0
Expect multiplication(-2, 5) to be -10
Expect multiplication(2.5, 4) to be 10.0
Expect multiplication(7, -3) to be -21

2. A function called "concatOdds" takes two arrays of integers as arguments.
It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

Expect concatOdds([1, 2, 3], [4, 5, 6]) to be [1, 3, 5]
Expect concatOdds([0, 2, 4], [1, 3, 5]) to be [1, 3, 5]
Expect concatOdds([7, 8, 9], [10, 11, 12]) to be [7, 9, 11]
Expect concatOdds([6, 8], [3, 5]) to be [3, 5]
Expect concatOdds([], [1, 2, 3]) to be [1, 3]
Expect concatOdds([2, 4, 6], []) to be []
Expect concatOdds([1, 1, 1], [1, 1, 1]) to be [1, 1, 1, 1, 1, 1]

Shopping cart Functional tests:
1.Expect the user to be able to add items to the cart.
2.Expect the user to be able to remove items from the cart.
3.Expect the cart to display the correct total cost of all items.
4.Expect the user to be able to check out as a guest.
5.Expect the user to be able to check out as a logged-in user.
6.Expect the user to be prompted to create an account or log in if they check out as a guest.
7.Expect the user to be able to log in if they have an account.
8.Expect the user to be able to create an account if they don't have one.
9.Expect the user to see the correct billing and shipping information at each step of checkout.
10.Expect the user to see a confirmation page with their order details after completing the checkout process.
11.Expect the cart to be emptied after the checkout process is complete.
12.Expect an error message to be displayed if the cart is empty.
13.Expect the user to be able to return to the shopping cart and continue shopping after checkout is complete.
14.Expect the user to be able to view their order history if they have an account.


The prompt doesn't mention the following:

What happens if the user provides invalid billing or shipping information.
What happens if the user logs in after checking out as a guest.
What happens if the user creates an account after checking out as a guest.
What happens if the user tries to use an invalid email or password to log in.
What happens if the user tries to create an account with an email that already exists in the system.
How the user's payment information is processed and secured.
How the user's personal information is stored and secured.
*/