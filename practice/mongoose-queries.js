const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { ObjectID } = require('mongodb')
const { User } = require('./../server/models/user')

User.findById('59f7aaae8c68b804338b2cbd').then((user) => {
  if (!user) {
    return console.log('Unable to find user')
  }

  console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
  console.log(e)
})



// let id = '59f92ba53809d6446055db40'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found')
//   }
//   console.log('Todo By ID', todo)
// }).catch((e) => console.log(e))
