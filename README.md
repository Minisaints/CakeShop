# CakeShop
MVC 5 project using Entity Framework, React, AutoFAC.

React for forming the front-end and axios for retrieving data from the RESTful API end point.
Administration back-end using model binding with the ability to modify database records using CRUD operations.
Database is SQL server 2016. Entity Framework was used along with migrations to populate data and maintain.

The project is a online shop built with MVC/React to buy cakes by placing orders with a functioning collapsible shopping basket, card information and persistant data storage. CakeShop also has a back-end administration section for performing CRUD operations.

The shopping basket can be populated with cakes, with total prices and ability to remove cakes. Checkout is disabled if the basket is empty. Most of the styling is inlined css, however, I prefer using css-modules in a full project.

#Todo<br />
[<strong>X</strong>]Enable secure protocols (HTTPS) for card information (SSL).<br />
[ ]Integrate cake orders with the currently logged in account.<br />
[<strong>X</strong>]Display all cake orders on the admin section to authorised staff.<br />
[ ]Cake ordered can be marked as shipped, cancelled, payment successful through admin panel.<br />
[ ]Users can display their current orders and cancel if required.<br />
[<strong>X</strong>]Minor tweaks to the RESTful services which currently return not ideal responses.<br />
[<strong>X</strong>]Redesign the front-end to display product images.<br />
[ ]Products are interactive.<br />
[ ]Major refactoring of CSS.<br />
[ ]Store card details and possibly link to logged in account for future use.<br />

<img src="https://i.gyazo.com/cc9b1a3ff70b32d1f7a6a7127d91a2c1.png"/>
<img src="https://i.imgur.com/gkbcQPa.png"/>
<img src="https://i.imgur.com/cWTmhAR.png"/>
