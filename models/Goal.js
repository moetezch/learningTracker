const mongoose = require('mongoose')
const { Schema } = mongoose

const goalSchema = new Schema({
  name:String,
  description:String,
  _user:{type:Schema.Types.ObjectId,ref:'User'}
})

mongoose.model('goals', goalSchema)