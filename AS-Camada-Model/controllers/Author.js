const Author = require('../services/Author');

const getAll =  async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findById(id);

  if(!authors) return res.status(404).json({ message: 'not found' });

  res.status(200).json(authors);
}

const create = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const author = await Author.create(firstName, middleName, lastName);

  if(!author) return res.status(404).json({ message: 'Dados inválidos' });
  
  res.status(201).json({ message: 'Author criado com sucesso '});
}

module.exports = {
  getAll,
  findById,
  create
}