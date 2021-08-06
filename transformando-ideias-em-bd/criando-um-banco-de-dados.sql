USE zoologico;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(45) NOT NULL,
    sexo VARCHAR(45) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(45) NOT NULL
);

CREATE TABLE gerente (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    gerente_id INT,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE animal_cuidador(
	animal_id INT,
    cuidador_id INT,
	FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
);