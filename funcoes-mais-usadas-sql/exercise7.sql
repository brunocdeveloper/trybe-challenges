SELECT title, rating,
	CASE 
		WHEN rating = 'G' THEN 'livre para todos'
        WHEN rating = 'PG' THEN 'não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'não recomendado para menores de 13 anos'
        WHEN RATING = 'R'THEN 'não recomendado para menores de 17 anos'
		ELSE 'Proibido para menos de idade'
        END AS 'classificação indicativa'
FROM sakila.film;
