USE sakila;
SELECT COUNT(store_id) FROM customer
WHERE active IS TRUE AND store_id = 1;



