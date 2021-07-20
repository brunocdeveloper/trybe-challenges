USE sakila;
SELECT COUNT(payment_date) FROM payment
WHERE DATE(payment_date) = '2005-05-25';
