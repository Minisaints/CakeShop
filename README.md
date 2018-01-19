# CakeShop
MVC 5 project using Entity Framework, React, AutoFAC.

React for forming the front-end and axios for retrieving data from the RESTful API end point.
Administration back-end using model binding with the ability to modify database records using CRUD operations.
Database is SQL server 2016. Entity Framework was used along with migrations to populate data and maintain.

The project is a online shop built with MVC/React to buy cakes by placing orders with a functioning collapsible shopping basket, card information and persistant data storage. CakeShop also has a back-end administration section for performing CRUD operations.

The shopping basket can be populated with cakes, with total prices and ability to remove cakes. Checkout is disabled if the basket is empty. Most of the styling is inlined css, however, I prefer using css-modules in a full project.

#Todo
[ ]Validation and secure protocols for card information (SSL)
[ ]Integrate cake orders with the currently logged in account.
[ ]Display all cake orders on the admin section to authorised staff.
[ ]Cake ordered can be marked as shipped, cancelled, payment successful through admin panel.
[ ]Users can display their current orders and cancel if required.
[ ]Minor tweaks to the RESTful services which currently return not ideal responses.
[ ]Redesign the front-end to display interactable product images.
[ ]Major refactoring of CSS.
[ ]Store card details and possibly link to logged in account for future use.

