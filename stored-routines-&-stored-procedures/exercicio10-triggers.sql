USE betrybe_automoveis
DELIMITER $$

CREATE TRIGGER deleted
	BEFORE DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXLUSAO', NOW());
    
END $$
DELIMITER ;

DELETE FROM carros WHERE id_carro = 1;

SELECT * FROM carros;