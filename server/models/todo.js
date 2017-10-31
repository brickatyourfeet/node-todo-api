const mongoose = require('mongoose')

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

module.exports = { Todo }


// let newTodo = new Todo({
//   text: 'Cook dinner'
// })
//
// newTodo.save().then((doc) => {
//   console.log('saved todo', doc)
// }, (e) => {
//   console.log('unable to save todo')
// })

// let otherTodo = new Todo({
//   text: 'Pick up dry cleaning',
//   completedAt: 12398797
// })
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2))
// }, (e) => {
//   console.log('unable to save', e)
// })
