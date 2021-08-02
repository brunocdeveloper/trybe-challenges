USE betrybe_automoveis
DELIMITER $$

CREATE TRIGGER insertions
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET new.data_atualizacao = NOW(),
    NEW.acao = 'INSERT',
    NEW.disponivel_em_estoque = 1;
    
END $$
DELIMITER ;

INSERT INTO carros(preco) VALUES (1000);

SELECT * FROM carros;