USE sakila;
DELIMITER $$

CREATE PROCEDURE PesquisaPorCategoria(IN categoria VARCHAR(50))
BEGIN
	SELECT film.film_id, film.title,
	 filmCategory.film_id,
	 filmCategory.category_id,
	 category.category_id,
	 category.name
	FROM film AS film
	INNER JOIN film_category AS filmCategory ON filmCategory.film_id = film.film_id
	INNER JOIN category AS category ON category.category_id = filmCategory.category_id
	WHERE category.name = categoria;
END $$

DELIMITER ;

CALL PesquisaPorCategoria('Drama');