const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'bruno',
  password: '02061997',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
