SELECT film_id, title, CASE
	WHEN title = 'ACE GOLDFINGER' THEN 'JÁ ASSISTI'
    ELSE 'Não conheço o filme'
    END AS 'conheço o filme?'
 FROM sakila.film;
