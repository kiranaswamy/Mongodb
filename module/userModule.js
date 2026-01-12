
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
 
    name: {
      type:String,
      required:true
    },

  })

  const User = mongoose.model('Man',userSchema,"Man")

module.exports = User