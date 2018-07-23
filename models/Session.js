const mongoose = require('mongoose')
const { Schema } = mongoose

const sessionSchema = new Schema({
  name:String,
  note:String,
  date:Date,
  startTime:Date,
  duration:Date,
  pause:Date,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
  project: [{ type: Schema.Types.ObjectId, ref: 'Project'}],
  _user:{type:Schema.Types.ObjectId,ref:'User'}

})

mongoose.model('sessions', sessionSchema)