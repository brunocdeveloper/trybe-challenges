const connection = require('../modelsMongo/connections')
const { ObjectId } = require('mongodb');

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
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName}) => {
        return getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName
        })
      })
    })
}

const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))
    .then()
  
  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

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
  await connection()
    .then((db => db.collection('authors').insertOne({ firstName, middleName, lastName })));
}


module.exports = {
  getAll,
  findById,
  isValid,
  create
}
