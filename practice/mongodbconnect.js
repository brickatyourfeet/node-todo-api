// const MongoClient = require('mongodb').MongoClient
//destructured version vvvvv
const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log(obj)

// var user = { name: 'kyle', age: 25 }
// var { name } = user
// console.log(name) // prints kyle

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo db server')
  }
  console.log('connected to mongo db server')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertOne({
    name: 'Kyle',
    age: 30,
    location: 'Seattle'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to add user')
    }

    console.log(result.ops[0]._id.getTimestamp())
  })

  db.close()
})
