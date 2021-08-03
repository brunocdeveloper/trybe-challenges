USE BeeMovies;
DELIMITER $$

CREATE TRIGGER deleted_movies_fix_1
	BEFORE DELETE ON movies
    FOR EACH ROW
BEGIN 
   INSERT INTO movies_logs(movie_id, executed_action, log_date)
   VALUES(OLD.movie_id, 'DELETE', NOW());
   
 END $$

DELIMITER ;

DELETE FROM movies
WHERE movie_id = 8;


SELECT * FROM movies_logs;

