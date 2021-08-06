USE sakila;
DELIMITER $$

CREATE FUNCTION ObterNomeFilmePorId(id INT)
	RETURNS VARCHAR(100) READS SQL DATA
    BEGIN 
    DECLARE nomeFilme VARCHAR(100);
	SELECT film.title
		FROM inventory AS inventory
		INNER JOIN film AS film
		ON inventory.inventory_id = film.film_id
        WHERE film.film_id = id
        INTO nomeFilme;
        RETURN nomeFilme;
	END $$

DELIMITER ;

SELECT ObterNomeFilmePorId(1);