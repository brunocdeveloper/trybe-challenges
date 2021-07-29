USE sakila;
DELIMITER $$

CREATE PROCEDURE MostrarTop10Atores()
BEGIN 
	SELECT actor_id, COUNT(*) AS 'Quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL MostrarTop10Atores();