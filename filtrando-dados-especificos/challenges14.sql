USE sakila;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';