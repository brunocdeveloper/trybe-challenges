USE sakila;
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate DESC LIMIT 50;
