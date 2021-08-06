USE BeeMovies;
DELIMITER $$

CREATE TRIGGER updates_movies
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN 
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
 END $$

DELIMITER ;

UPDATE movies
SET ticket_price = 1005
WHERE movie_id = 1;

SELECT * FROM movies;

