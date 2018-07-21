const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = new Schema({
  name:{ type : String},
  _user:{type:Schema.Types.ObjectId,ref:'User'}
})

mongoose.model('categories', categorySchema)