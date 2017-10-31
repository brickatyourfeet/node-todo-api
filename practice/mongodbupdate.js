// const MongoClient = require('mongodb').MongoClient
//destructured version vvvvv
const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo db server')
  }
  console.log('connected to mongoDB server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59f795911d9f1b734e0f0c81')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59f3b611092d9f332d16b31b')
  }, {
    $set: {
      name: 'Fake Name'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })






  // db.close()

})
