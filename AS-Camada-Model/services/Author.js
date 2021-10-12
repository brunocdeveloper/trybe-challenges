const Author = require('../modelsMongo/Author');

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

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const getAll = async () => {
  const authors = await Author.getAll()

  return authors.map(getNewAuthor);
}


const findById = async (id) => {
  const author = await Author.findById(id)

  return getNewAuthor(author);
}

const create = async (firstName, middleName, lastName) => {
  const valid = isValid(firstName, middleName, lastName);

  if (!valid) return false;

  await Author.create(firstName, middleName, lastName);

  return true;
}

module.exports = {
  getAll,
  findById,
  create,
}