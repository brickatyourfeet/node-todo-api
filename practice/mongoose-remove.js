const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { ObjectID } = require('mongodb')
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

//both of these return the doc
//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('59fce507b8cc960a65d0e8d2').then((todo) => {
  console.log(todo)
})

Todo.findOneAndRemove({ _id: '59fce507b8cc960a65d0e8d2' })
