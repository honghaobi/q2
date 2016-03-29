**Create a new postgresql database**

Open 'psql' and type the command:

```sql
CREATE DATABASE exercisedb;
```

**Import the tables**

From the terminal command line (not the psql terminal) type:

```
psql -d exercisedb -f 02-statements.sql
```

## Review

Before doing more joins, practice making some queries.  Write queries to do the following:

- display the customers by name in alphabetical order

$SELECT * FROM customers ORDER BY name ASC;

- display all customers by their names in reverse alphabetical order

$SELECT * FROM customers ORDER BY name DESC;

- display all items from the items table

$SELECT * FROM items;

Write an sql query to find and display (Retrieve)  all the items. Review the table.

$SELECT * FROM items;

display all boots in the items table
Inspect the boot names, investigate wildcard matchers for LIKE command

$SELECT * FROM items WHERE name LIKE 'boot%';

display all orders
Write an sql query to retrieve all the orders. Tip: To get out of a long list, hit esc then hit q

$SELECT * FROM orders;

display first 5 orders
Write a sql query to retrieve the first 5 orders.

$SELECT * FROM orders ORDER BY id ASC LIMIT 5;

display last 5 orders
display the 5 orders with the highest id numbers.

$SELECT * FROM orders ORDER BY id DESC LIMIT 5;

display the name and email address of each customer

$SELECT name, email FROM customers;

display the id, name and address of each customer

$SELECT id, name, address FROM customers;

count the number of customers

$SELECT COUNT(id) FROM customers;

add up the dollar amount of all the orders

$SELECT SUM(amount) FROM orders;

add up the dollar amount of the customer with an id of 1

$SELECT SUM(amount) FROM orders WHERE id = 1;

calculate the average dollar amount of the orders

$SELECT AVG(amount) FROM orders;

calculate the average dollar amount rounded to 2 decimal places of the orders

$SELECT ROUND(AVG(amount),2) FROM orders;

display the minimum order amount of all the orders

$SELECT MIN(amount) FROM orders;

display the maximum order amount of all the orders

$SELECT MAX(amount) FROM orders;

display the minimum order amount for each customer_id in orders

$SELECT customer_id, MIN(amount) FROM orders GROUP BY customer_id;

display the maximum order amount for each customer_id in orders

$SELECT customer_id, MAX(amount) FROM orders GROUP BY customer_id;

display the customers from Colorado

$SELECT * FROM customers WHERE state = 'Colorado';

display the customers from Colorado who live in Rigobertoside

$SELECT * FROM customers WHERE state = 'Colorado' AND city = 'Rigobertoside';

display the customers from Ohio and Virginia

$SELECT * FROM customers WHERE state = 'Ohio' OR state = 'Virginia';

update the name of the item whose description is “snow board” to board01
verify the change by viewing the items in the table

$UPDATE items SET name='board01' WHERE description = 'snow board';

add an item to the items table with the name: kayak01 and description: one person river kayak
verify the entry has been added by viewing the table

$INSERT INTO items (name, description) VALUES ('kayak01', 'one person river kayak');

delete the item that was just added with the name: kayak01 and description: one person river kayak

$DELETE FROM items WHERE items.name='kayak01' AND items.description='one person river kayak';

display the total order amount per customer_id in the orders table

$SELECT SUM(amount) FROM orders GROUP BY customer_id;

display the order id, customer name and order amount for each order
inner joins make use of the 'customer_id' field in the orders table

$SELECT orders.id, customers.name, orders.amount FROM orders INNER JOIN customers ON customers.id = orders.customer_id;

display the customer id, customer name and total amount of all their orders, list in alphabetical order of the customer name

$SELECT orders.id, customers.name, orders.amount FROM orders INNER JOIN customers ON customers.id = orders.customer_id ORDER BY customers.name ASC;

display the customer id, customer name and average amount of all their orders, list in alphabetical order of the customer name

$SELECT customers.name, AVG(orders.amount) FROM orders INNER JOIN customers ON customers.id = orders.customer_id GROUP BY customers.id ORDER BY customers.name ASC;

display the customer id, customer name and average amount rounded to two decimal places of all their orders, list in alphabetical order of the customer name
same as last story with the average amount rounded to 2 decimal places

$SELECT customers.name, ROUND(AVG(orders.amount),2) FROM orders INNER JOIN customers ON customers.id = orders.customer_id GROUP BY customers.id ORDER BY customers.name ASC;

display all the item names from all the orders that have customer id = 2

$SELECT items.name FROM items INNER JOIN orderitems ON orderitems.item_id = items.id INNER JOIN orders ON orderitems.order_id = orders.id INNER JOIN customers ON customers.id = orders.customer_id WHERE customers.id = 2;

display all customer ids that have ordered the boot02 item (i.e. item.id = 8)

$SELECT customers.id FROM orderitems JOIN orders ON orders.id = orderitems.order_id JOIN customers ON customers.id = orders.customer_id WHERE orderitems.item_id = 8 GROUP BY customers.id;

display all customer names that have ordered the bike03 item

$SELECT customers.name FROM orderitems JOIN orders ON orders.id = orderitems.order_id JOIN customers ON customers.id = orders.customer_id INNER JOIN items ON orderitems.item_id = items.id WHERE items.name = 'bike03' GROUP BY customers.id;

display the total amount that customer ‘Evert Pfeffer’ has placed on orders for item bike03

$SELECT SUM(orders.amount) FROM orderitems JOIN orders ON orders.id = orderitems.order_id JOIN customers ON customers.id = orders.customer_id INNER JOIN items ON orderitems.item_id = items.id WHERE customers.name = 'Evert Pfeffer' AND items.name = 'bike03';
