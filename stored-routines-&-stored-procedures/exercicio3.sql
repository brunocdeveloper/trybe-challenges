USE sakila;

DELIMITER $$

CREATE PROCEDURE PesquisaSN(IN emailC VARCHAR(100), OUT validate BOOL)
BEGIN 
	SELECT active INTO validate
    FROM customer
    WHERE emailC = email;
END $$;

DELIMITER ;

CALL PesquisaAtivoOuNao('MARY.SMITH@sakilacustomer.org', @validacao);
SELECT @validacao;


   