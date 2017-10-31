const mongoose = require('mongoose')

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})


module.exports = { User }


// let user = new User({
//   email: 'emailstring@fake.com'
// })


// user.save().then((doc) => {
//   console.log('user saved', doc)
// }, (e) => {
//   console.log('unable to save user ', e)
// })
