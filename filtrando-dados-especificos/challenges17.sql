USE sakila;
SELECT COUNT(payment_date) FROM payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';
