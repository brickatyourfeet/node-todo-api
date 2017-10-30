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

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'do something' }).then((result) => {
  //   console.log(result)
  // })
  //deleteOne
  // db.collection('Todos').deleteOne({ text: 'do something' }).then((result) => {
  //   console.log(result)
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result)
  // })
  // db.close()

  //db.collection('Users').deleteMany({ name: 'Kyle' })

  // db.collection('Users').findOneAndDelete({ _id: new ObjectID("59f3b6735071ba333fc03d74") })
  //   .then((results) => {
  //     console.log(JSON.stringify(results, undefined, 2))
  //   })
})
