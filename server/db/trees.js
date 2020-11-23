const connection = require('./connection')

function getTrees (db = connection) {
  return db('trees').select()
}

module.exports = {
  getTrees
}
