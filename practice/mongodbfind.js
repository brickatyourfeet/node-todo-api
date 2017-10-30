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

  //toArray returns a promise so we then
  // db.collection('Todos').find({
  //   _id: new ObjectID('59f3afb500247b331323d20d')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('unable to fetch todos', err)
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log('unable to fetch todos', err)
  // })

  db.collection('Users').find({ name: 'Kyle' }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  })

  // db.close()
})
