USE BeeMovies;
DELIMITER $$

CREATE TRIGGER inserindo_movies
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN 
	SET NEW.release_year = YEAR(CURDATE());
END $$

CREATE TRIGGER inserindo_movies_logs
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

INSERT INTO movies(ticket_price)
VALUES(1003);

SELECT * FROM movies;
SELECT * FROM movies_logs;