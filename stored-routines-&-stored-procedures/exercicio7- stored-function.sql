USE sakila;
DELIMITER $$

CREATE FUNCTION ContagemDeFilmesPorCategoria(categoria VARCHAR(20))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE contagem INT;
	SELECT COUNT(*)
	FROM film_category AS filmCategory
    INNER JOIN category AS category
    ON category.category_id = filmCategory.category_id
    WHERE category.name = categoria
    INTO contagem;
    RETURN contagem;
    END $$

DELIMITER ;

SELECT ContagemDeFilmesPorCategoria('Action')
