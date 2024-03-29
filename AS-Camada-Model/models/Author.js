const connection = require('../modelsMongo/connections');


// cria um novo objeto/ remove vazio com o filter e concatena um nome inteiro com o join
const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((nome) => nome).join(" ");
  return  {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}


// função usada no map abaixo para 'refatorar' o objeto para o formato camel case
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

const getAll = async () => {
  const [author] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return author.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?', [id]
  );
  
  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => {
  connection.execute('INSERT INTO model_exemple.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)')
  [firstName, middleName, lastName]
}

module.exports = {
  getAll,
  findById,
  isValid,
  create
}
