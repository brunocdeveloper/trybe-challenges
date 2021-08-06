USE sakila;
DELIMITER $$

CREATE PROCEDURE ObterAtoresPopulares()
BEGIN
	SELECT actor_id, COUNT(*) AS contagem FROM film_actor
	GROUP BY actor_id
    ORDER BY contagem DESC
    LIMIT 10;
END$$
DELIMITER ;

CALL obterAtoresPopulares();