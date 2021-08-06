USE BeeMovies;
DELIMITER $$

CREATE TRIGGER inserindo
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN 
	SET NEW.release_year = YEAR(CURDATE());
END $$

DELIMITER ;

INSERT INTO movies(ticket_price)
VALUES(1000);

SELECT * FROM movies;