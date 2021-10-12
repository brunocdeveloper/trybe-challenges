const connection = require('../modelsMongo/connections')
const { ObjectId } = require('mongodb');


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
        return {
          id: _id,
          firstName,
          middleName,
          lastName
        }
      })
    })
}

const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))
    .then()
  
  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return {
    id,
    firstName,
    middleName,
    lastName,
  }
};


const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db => db.collection('authors').insertOne({ firstName, middleName, lastName })));
}


module.exports = {
  getAll,
  findById,
  create
}
