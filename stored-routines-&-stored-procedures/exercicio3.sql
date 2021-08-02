USE sakila;
DELIMITER $$

CREATE PROCEDURE VerificaClientesAtivos(IN emailcliente VARCHAR(100), OUT atividade BOOL)
BEGIN 
	SELECT active FROM customer
    WHERE emailcliente = email
	INTO atividade;
END $$
DELIMITER ;

CALL VerificaClientesAtivos('MARY.SMITH@sakilacustomer.org', @atividade);
SELECT @atividade;
