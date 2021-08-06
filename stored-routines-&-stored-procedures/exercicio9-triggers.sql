USE betrybe_automoveis
DELIMITER $$

CREATE TRIGGER updates
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET new.data_atualizacao = NOW(),
    NEW.acao = 'ATUALIZACAO',
    NEW.disponivel_em_estoque = 1;
    
END $$
DELIMITER ;

UPDATE carros
SET preco = 2500
WHERE id_carro = 2;

SELECT * FROM carros;