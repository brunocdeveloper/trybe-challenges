USE sakila;
DELIMITER $$

CREATE FUNCTION QuantidadeDePagamentosPorIdCliente(idCliente INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantosPagamentos INT;
	SELECT COUNT(*) FROM payment
	GROUP BY customer_id
    HAVING idCliente = customer_id
    INTO quantosPagamentos;
    RETURN quantosPagamentos;
END $$

DELIMITER ;

SELECT QuantidadeDePagamentosPorIdCliente(1)
    
