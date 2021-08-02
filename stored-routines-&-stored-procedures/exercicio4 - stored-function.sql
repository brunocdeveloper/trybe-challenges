USE sakila;
DELIMITER $$

CREATE FUNCTION SelecionaFilme(selectedTitle VARCHAR(100), selectedSpecial_features VARCHAR(100))
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE resultado VARCHAR(100);
    SELECT title
    FROM film
    WHERE title = selectedTitle AND special_features LIKE CONCAT('%', selectedSpecial_Features, '%')
    INTO resultado;
RETURN resultado;
END $$

DELIMITER ;

SELECT SelecionaFilme('BRAVEHEART HUMAN', 'DELETED')
	INTO @apenasteste;
    
SELECT @apenasteste;

    
