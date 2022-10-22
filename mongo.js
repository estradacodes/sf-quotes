const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(process.env.MONGOURL)
      .then((client) => {
        dbConnection = client.db('sfquotes')
        return cb()
      }).catch(err => {
        console.log(err)
        return cb(err)
      })
    },
    getDb: () => dbConnection
}
